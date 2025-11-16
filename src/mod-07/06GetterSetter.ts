class BankAccount {
  readonly userId: number;
  userName: string;
  protected userBalance: number;

  constructor(userId: number, userName: string, userBalance: number) {
    (this.userId = userId),
      (this.userName = userName),
      (this.userBalance = userBalance);
  }
  // addBalance(balance: number) {
  //   this.userBalance = this.userBalance + balance;
  // }
  // getBalance (){
  // return this.userBalance
  // }

  /* setter use */
  set addBalance2(amount: number) {
    this.userBalance = this.userBalance + amount;
  }

  /* getter use */
  get getBalance() {
    return this.userBalance;
  }
}

class StudentAccount extends BankAccount {
  test() {
    this.userBalance;
  }
}

const alaminAccount = new BankAccount(123, "alamin", 20);
// alaminAccount.addBalance (200)
// alaminAccount.addBalance (300)
// console.log(alaminAccount.getBalance());
alaminAccount.addBalance2 = 100;

console.log(alaminAccount);
