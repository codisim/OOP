const _id = Symbol("id");
const _name = Symbol("name");
const _passMark = Symbol("passMark");
const _subject = Symbol("subject");

class Exam {
  constructor(id, name, subject, passMark) {
    this[_id] = id;
    this[_name] = name;
    this[_subject] = subject;
    this[_passMark] = passMark;
  }

  get id() {
    return this[_id];
  }

  get name() {
    return this[_name];
  }

  set name(name) {
    this[_name] = name;
  }

  get subject() {
    return this[_subject];
  }

  set subject(subject) {
    this[_subject] = subject;
  }

  get passMark() {
    return this[_passMark];
  }

  set subjects(passMark) {
    this[_passMark] = passMark;
  }

  toString() {
    return `
            ID: ${this[_id]}, 
            Name: ${this[_name]}, 
            passMark: ${this[passMark]}`;
  }
}

module.exports = Exam;
