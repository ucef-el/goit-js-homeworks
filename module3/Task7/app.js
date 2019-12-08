"use stricty";
/*
 * Типов транзацкий всего два.
 * Можно положить либо снять деньги со счета.
 */
const Transaction = {
  DEPOSIT: "deposit",
  WITHDRAW: "withdraw"
};

/*
 * Каждая транзакция это объект со свойствами: id, type и amount

 const transaction = {
     id : x,
     type: y,
     amount: z
 }
 */

const account = {
  // Текущий баланс счета
  balance: 00,

  // История транзакций
  transactions: [
    {
      id: "id-2",
      type: "WITHDRAW",
      amount: 20
    },
    {
      id: "id-1",
      type: "DEPOSIT",
      amount: 20
    }
  ],

  /*
   * Метод отвечающий за добавление суммы к балансу
   * Создает объект транзакции и вызывает addTransaction
   */
  deposit(amount) {
    this.balance += amount;
    const transaction = {
      id: "",
      type: "DEPOSIT",
      amount
    };

    this.addTransaction(transaction);
  },

  /*
   * Метод отвечающий за снятие суммы с баланса.
   * Создает объект транзакции и вызывает addTransaction
   *
   * Если amount больше чем текущий баланс, выводи сообщение
   * о том, что снятие такой суммы не возможно, недостаточно средств.
   */
  withdraw(amount) {
    let message;
    const transaction = {
      id: "",
      type: "WITHDRAW",
      amount
    };

    this.addTransaction(transaction);

    if (amount > this.balance) {
      message = "снятие такой суммы не возможно, недостаточно средств";
      return message;
    }

    this.balance = this.balance - amount;
  },

  /*
   * Метод добавляющий транзацию в свойство transactions
   * Принимает объект трназкции
   */
  addTransaction(transaction) {
    this.transactions.push(transaction);
  },

  /*
   * Метод возвращает текущий баланс
   */
  getBalance() {
    return this.balance;
  },

  /*
   * Метод ищет и возвращает объект транзации по id
   */
  getTransactionDetails(id) {
    for (let i = 0; i < this.transactions.length; i += 1) {
      const item = this.transactions[i];
      if (item.id === id) {
        return item;
      }
    }
  },

  /*
   * Метод возвращает количество средств
   * определенного типа транзакции из всей истории транзакций
   */
  getTransactionTotal(type) {
    let total = 0;

    for (let i = 0; i < this.transactions.length; i += 1) {
      const item = this.transactions[i];
      if (item.type === type) {
        total += item.amount;
      }
    }

    return total;
  }
};

///////////////////////////////////////////////////////////////////

const transaction = {
  id: "id-3",
  type: "DEPOSIT",
  amount: 20
};

//console.log(account.addTransaction(transaction));
// console.table(account.transactions);
//console.log(account.getTransactionDetails("id-3"));
//console.log(account.getTransactionTotal("DEPOSIT"));
//console.log(account.balance);
//console.log(account.deposit(80));
console.log(account.balance);
//console.log(account.balance);
//console.log(account.balance);
console.table(account.transactions);
