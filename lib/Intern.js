const Employee = require('./Employee');

class Intern extends Employee {
  constructor(school) {
    this.school =  school;
  }

  getInfo() {
    this.school;
  }
}

module.exports = Intern;