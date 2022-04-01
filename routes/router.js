const localTimeController = require('../controllers/localTimerController.js')

module.exports = function (app) {
  app.get('/getRawData', localTimeController._getRawData)
  app.get('/getDate', localTimeController._getDate)
  app.get('/getTime', localTimeController._getTime)
  app.get('/getDay', localTimeController._getDay)
}
