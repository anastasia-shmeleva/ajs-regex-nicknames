export default class Validator {
  constructor(name) {
    this.username = name;
  }

  validateUsername() {
    const criteria1 = /[(\w-)]/.test(this.username); // только латинские буквы, символы тире -, подчёркивания _ и цифры (0-9);
    const criteria2 = /^[^-_\d]/.test(this.username); // начало строки не цифра, - или _
    const criteria3 = /[^-_\d]$/.test(this.username); // конец строки не цифра, - или _
    const criteria4 = !/\d{4,}/.test(this.username); // не должно содержать подряд более трёх цифр
    return (criteria1 && criteria2 && criteria3 && criteria4);
  }
}
