export { Convert };

class Convert {
  static realToDolar(num: string) {
    num = num.replace(".", "");
    num = num.replace(",", ".");
    return Number(num);
  }
}
