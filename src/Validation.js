class Validation {
  static hasDuplication([...numbers]) {
    const set = new Set();
    numbers.forEach((number) => {
      set.add(number);
    });

    if (numbers.length !== set.size) {
      return false;
    }

    return true;
  }
}
export default Validation;