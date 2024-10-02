export class Customer {
  constructor(firstname, lastname, dob, id) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.dob = dob;
    this.id = id;
  }

  getAge() {
    const birthday = new Date(this.dob + "T00:00:00");
    const today = new Date();
    const age = today.getFullYear() - birthday.getFullYear();
    return age;
  }
}
