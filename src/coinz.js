export default class Coinz {
  constructor(username) {
    // Start off with 5 Coinz because why not?
    this.username = username.toLowerCase();
    this.state = { [this.username]: 5 };
  }

  print_state(name) {
    let dbName = name.toLowerCase();

    if (this.state[dbName]) {
      console.log(`${name} has ${this.state[dbName]} Coinz.\n`);
    } else {
      console.log(`No such user by the name of ${name}\n`);
    }

    console.log(`Request complete. \n`);
  }
}
