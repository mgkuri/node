const date = require('date-and-time')

class LocalTime {
  constructor () {
    this.dateTime = new Date()
  }

  toString () {
    return this.dateTime.toString()
  }

  getTime () {
    return date.format(this.dateTime, 'hh:mm:ss')
  }

  getDate () {
    return date.format(this.dateTime, 'YYYY/MM/DD')
  }

  getDay () {
    return date.format(this.dateTime, 'dddd')
  }
}
module.exports = LocalTime
