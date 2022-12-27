const mongoose = require('mongoose');
const TransactionModel = require('../models/transactionModel');

class TransactionsController {
  async Register(req, res) {
    const { id: userId } = req.user;

    const { description, value, date, type } = req.body;

    if(!description) {
      return res.status(400).json({message: 'Preencha o campo descrição para continuar.'})
    }

    if(!value) {
      return res.status(400).json({message: 'Preencha o campo valor para continuar.'})
    }

    if(!date) {
      return res.status(400).json({message: 'Preencha o campo data para continuar.'})
    }

    if(!type) {
      return res.status(400).json({message: 'Preencha o campo tipo para continuar.'})
    }

    try {
      const transactionRegister = await TransactionModel.create({
        user_id: userId,
        description,
        value,
        date,
        type
      })

      if(!transactionRegister) {
        return res.status(400).json({message: 'Não foi possível registrar essa transação.'})
      }

      return res.status(200).json(transactionRegister)
    } catch (error) {
      return res.status(500).json({ message:  error.message});
    }
  }

  async List(req, res) {
    const { id: userId}  = req.user;

    try {
      const transactions = await TransactionModel.find({user_id: userId});

      return res.status(200).json(transactions)
    } catch (error) {
      return res.status(500).json({ message:  error.message});
    }
  }

  async Delete(req, res) {
    const { id } = req.params;

    try {
     await TransactionModel.deleteOne({_id: id})
     
      return res.status(200).json({message: 'Transação excluida com sucesso'})
    } catch (error) {
      return res.status(500).json({ message:  error.message});
    }
  }

  async Summary(req, res) {
    const {id: userId} = req.user;

    try {
     const [summaryTransactions] = await TransactionModel.aggregate([
        {
          '$match': {
            user_id: new mongoose.Types.ObjectId(userId)
          }
        },
        {
          '$group': {
            '_id': '$type', 
            'total': {
              '$sum': '$value'
            }
          }
        }, {
          '$group': {
            '_id': null, 
            'data': {
              '$push': {
                'k': '$_id', 
                'v': '$total'
              }
            }
          }
        }, {
          '$replaceRoot': {
            'newRoot': {
              '$arrayToObject': '$data'
            }
          }
        }
      ])
    
      const totalEntries = summaryTransactions?.["Entrada"] ?? 0;
      const totalExpenses = summaryTransactions?.["Saída"] ?? 0;
      const amountTransactions = totalEntries - totalExpenses;

      return res.status(200).json({
        totalEntries,
        totalExpenses,
        amountTransactions
      })
    } catch (error) {
      return res.status(500).json({ message:  error.message});
    }
  }
}

module.exports = new TransactionsController();