interface Person {
  firstName: string;
  lastName: string;
  getFullName(): string;
}

const person1: Person = {
  firstName: 'John',
  lastName: 'Doe',
  getFullName() {
    return `${this.firstName} ${this.lastName}`
  }
}

console.log(person1.getFullName());