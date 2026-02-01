const _id = Symbol("id");
const _email = Symbol("email");
const _phone = Symbol("phone");
const _altarnatePhone = Symbol("alternatePhone");
const _address = Symbol("address");

class Contact {
  constructor({ id, email, phone, alternatePhone, address }) {
    this[_id] = id;
    this[_email] = email || "";
    this[_phone] = phone || "";
    this[_altarnatePhone] = alternatePhone || "";
    this[_address] = address || null;
  }

  get id() {
    return this[_id];
  }

  get email() {
    return this[_email];
  }

  set email(email) {
    this[_email] = email;
  }

  get phone() {
    return this[_phone];
  }

  set phone(phone) {
    this[_phone] = phone;
  }

  get alternatePhone() {
    return this[_altarnatePhone];
  }

  set alternatePhone(alternatePhone) {
    this[_altarnatePhone] = alternatePhone;
  }

  get address() {
    return this[_address];
  }

  set address(address) {
    this[_address] = address;
  }

  toString() {
    return `
            ID: ${this[_id]}, 
            Email: ${this[_email]}, 
            Phone: ${this[_phone]}, 
            Alternate Phone: ${this[_altarnatePhone]}, 
            Address: ${this[_address]}`;
  }
}

module.exports = Contact;
