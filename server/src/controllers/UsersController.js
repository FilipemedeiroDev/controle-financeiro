const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { addHours, isBefore } = require('date-fns');
const nodemailer = require('../nodemailerConfig');

const jwtSecret = require('../jwtSecret');

const UserModel = require('../models/userModel');
const UserToken = require('../models/userToken');

class UsersController {

  async Create(req, res) {
    const { name, email, password } = req.body;

    if(!name) {
      res.status(400).json({message: 'Preencha o campo nome para continuar'});
      return
    }
    
    if(!email) {
      res.status(400).json({message: 'Preencha o campo email para continuar'});
      return
    }

    if(!password) {
      res.status(400).json({message: 'Preencha o campo senha para continuar'});
      return
    }

    try {
      const emailAlreadyExists = await UserModel.findOne({email})

      if(emailAlreadyExists) {
        return res.status(400).json({ message: 'E-mail já cadastrado.'})
      }

      const encryptedPassword = await bcrypt.hash(password, 10);
      
      const userRegister = await UserModel.create({
        name,
        email,
        password: encryptedPassword,
      })

      if(!userRegister) {
        return res.status(400).json({ message:  'Não foi possive cadastrar o usuário'})
      }
      
       return res.status(201).json({message: 'Usuário cadastrado com sucesso!'})
    } catch (error) {
      return res.status(500).json({ message:  error.message});
    }
  }

  async Login(req, res) {
    const { email, password } = req.body;

    if(!email) {
      res.status(400).json({message: 'Preencha o campo email para continuar'});
      return
    }
    
    if(!password) {
      res.status(400).json({message: 'Preencha o campo senha para continuar'});
      return
    }
    try {
   
      const user = await UserModel.findOne({ email });
      
      if(!user) {
        return res.status(400).json({ message: 'Usuário não encontrado'})
      }

      const validatePassword = await bcrypt.compare(password, user.password)

      if(!validatePassword) {
        return res.status(400).json({ message: 'Email e/ou senha invalidos.' })
      }

      const token = jwt.sign({
        id: user._id,
      }, jwtSecret, {
        expiresIn: '4h'
      });

      return res.status(200).json({
        user: {
          id: user._id,
          nome: user.name,
          email:  user.email
        },
        token
      });
    } catch (error) {
      return res.status(500).json({ message:  error.message});
    }
  }

  async Forgot(req, res) {
    const { email } = req.body;

    const expiresAt = addHours(new Date(), 3);
    
    try {
      const user = await UserModel.findOne({ email });

      if(!user) {
        return res.status(404).json({ message: 'Usuário não encontrado.'})
      }
      
      const generatedToken = await UserToken.create({
        user: user._id,
        expiresAt,
        confimationtype: 'reset_password' 
      })
      
      nodemailer.sendMail({
        from: 'medeirolp@gmail.com',
        to: user.email,
        subject: 'Redefinição de Senha',
        html: `<a href="http://localhost:3000/reset/${generatedToken.code}" target="_blank">Clique aqui para redefinir sua senha</a>`
      })
      
      return res.status(201).send();
    } catch (error) {
      return res.status(500).json({ message:  error.message});
    }
  }

  async Reset(req, res) {
    const { code } = req.params;
    const { newPassword } = req.body;
    
    try {
      const userToken = await UserToken.findOne({ code }).populate('user','-password');
  
      if(!userToken) {
        return res.status(404).json({ message: 'Token invalido.'})
      }

      if (isBefore(userToken.expiresAt, new Date())) {
        return res.status(404).json({ message: 'Token expirado.'})
      }

      const encryptedPassword = await bcrypt.hash(newPassword, 10);

      await UserModel.updateOne({ _id: userToken.user._id }, { 
        password: encryptedPassword
      });

      return res.send()
    } catch (error) {
      return res.status(500).json({ message:  error.message});
    }
  }
}

module.exports = new UsersController();