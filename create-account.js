function createAccount(pin, amount) {
  let balance = amount || 0;
  let account = {
    checkBalance: function (inputPin) {
      return inputPin === pin ? `$${balance}` : "Invalid PIN.";
    },
    deposit: function (inputPin, amount) {
      if (inputPin !== pin) return "Invalid PIN.";
      else {
        balance = balance + amount;
        return `Succesfully deposited $${amount}. Current balance: $${balance}.`;
      }
    },
    withdraw: function (inputPin, amount) {
      if (inputPin !== pin) return "Invalid PIN.";
      else {
        if (amount > balance)
          return "Withdrawal amount exceeds account balance. Transaction cancelled.";
        balance = balance - amount;
        return `Succesfully withdrew $${amount}. Current balance: $${balance}.`;
      }
    },
    changePin(inputPin, newPin) {
      if (inputPin !== pin) return "Invalid PIN.";
      else {
        pin = newPin;
        return "PIN successfully changed!";
      }
    },
  };
  return account;
}

module.exports = { createAccount };
