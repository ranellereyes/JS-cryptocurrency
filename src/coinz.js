import chalk from 'chalk';

const DEFAULT_START_COINZ = 5;

export default class Coinz {
  constructor(username) {
    // Start off with 5 Coinz because why not?
    this.username = username.toLowerCase();
    this.state = { [this.username]: DEFAULT_START_COINZ };
  }

  init_user(username) {
    this.state[username.toLowerCase()] = DEFAULT_START_COINZ;
  }

  transfer(to, from, amt) {
    let to_db = to.toLowerCase(),
        from_db = from.toLowerCase();

    if (this.state[to_db] < amt) {
      console.log(`User` + chalk.red.underline.bold(to) +
        ` does not have ` + chalk.red.underline.bold(amt) + `Coinz.`);
      return;
    }

    this.state[to_db] += amt;
    this.state[from_db] -= amt;
    console.log(`Transaction complete`)
  }

  print_state(name) {
    let dbName = name.toLowerCase();

    if (this.state[dbName]) {
      console.log(`${name} has ` +
        chalk.red.underline.bold(`${this.state[dbName]}`) +
        ` Coinz.\n`);
    } else {
      console.log(`No such user by the name of ` +
        chalk.red.underline.bold(`\'${name}\'`) + `\n`);
    }

    console.log(`Request complete. \n`);
  }
}
