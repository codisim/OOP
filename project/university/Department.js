
const _id = Symbol('id');
const _name = Symbol('name');
const _subjects = Symbol('subjects');
const _head = Symbol('head');
const _teachers = Symbol('teachers');


class Department {
    constructor({ id, name, subjects, head, teachers }) {
        this[_id] = id;
        this[_name] = name;
        this[_subjects] = subjects || [];
        this[_head] = head || null;
        this[_teachers] = teachers || [];   
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

    get subjects() {
        return this[_subjects];
    }

    set subjects(subjects) {
        this[_subjects] = subjects;
    }

    get head() {
        return this[_head];
    }

    set head(head) {
        this[_head] = head;
    }

    get teachers() {
        return this[_teachers];
    }

    set teachers(teachers) {
        this[_teachers] = teachers;
    }       

    addTeacher(teacher) {
        this[_teachers].push(teacher);
    }

    toString() {
        return `
            ID: ${this[_id]}, 
            Name: ${this[_name]}, 
            Subjects: ${this[_subjects]}, 
            head: ${this[_head]}, 
            Teachers: ${this[_teachers]}`;
    }
}


module.exports = Department;