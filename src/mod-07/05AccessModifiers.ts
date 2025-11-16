class BankAccount {
  readonly userId: number;
  userName: string;
  protected userBalance: number;

  constructor(userId: number, userName: string, userBalance: number) {
    (this.userId = userId),
      (this.userName = userName),
      (this.userBalance = userBalance);
  }
   private addBalance(balance: number) {
    this.userBalance = this.userBalance + balance;
  }
}

class StudentAccount extends BankAccount{
      test(){
        this.userBalance
      }
}

const alaminAccount = new BankAccount(123, "alamin", 20);
// alaminAccount.addBalance (200)
console.log(alaminAccount);

