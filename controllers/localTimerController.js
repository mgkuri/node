const LocalTime = require('../models/LocalTime.js')

exports._getRawData = function (req, res) {
  res.send(new LocalTime().toString())
}
exports._getDate = function (req, res) {
  res.send(new LocalTime().getDate())
}
exports._getTime = function (req, res) {
  res.send(new LocalTime().getTime())
}
exports._getDay = function (req, res) {
  res.send(new LocalTime().getDay())
}
