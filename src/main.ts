interface Person {
  fName: string;
  lName: string;
}

interface Printable {
  printFullName: () => void;
}

const doSomething = (myPerson: Person & Printable) => {
  myPerson.printFullName();
};