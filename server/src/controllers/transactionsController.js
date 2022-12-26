
const TransactionModel = require('../models/transactionModel');

class TransactionsController {
  async Register(req, res) {
    const { id: userId } = req.user;

    const { description, value, type } = req.body;

    if(!description) {
      return res.status(400).json({message: 'Preencha o campo descrição para continuar.'})
    }

    if(!value) {
      return res.status(400).json({message: 'Preencha o campo valor para continuar.'})
    }

    if(!type) {
      return res.status(400).json({message: 'Preencha o campo tipo para continuar.'})
    }

    try {
      const transactionRegister = await TransactionModel.create({
        user_id: userId,
        description,
        value,
        type
      })

      if(!transactionRegister) {
        return res.status(400).json({message: 'Não foi possível registrar essa transação.'})
      }

      return res.status(201).json({message: 'Transação registrada com sucesso.'})
    } catch (error) {
      return res.status(500).json({ message:  error.message});
    }
  }

  async List(req, res) {
    const { id: userId}  = req.user;

    try {
      const transactions = await TransactionModel.find({user_id: userId});

      if(transactions.length === 0) {
        return res.status(400).json({message: 'Não há transações cadastradas.'})
      }

      return res.status(200).json(transactions)
    } catch (error) {
      return res.status(500).json({ message:  error.message});
    }
  }
}

module.exports = new TransactionsController();