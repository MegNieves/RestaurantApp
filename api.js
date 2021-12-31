var ctrls = require('./controllers'),
    apiRouter = require('express').Router()

// app.get('/plates', func(){})
    apiRouter.route('/plates')
      .get(ctrls.platesController.all)
      .post(ctrls.platesController.create)
  apiRouter.route('/plates/:id')
      .delete(ctrls.platesController.delete)
      .put(ctrls.platesController.update)

module.exports = apiRouter