const Employee = require("../lib/Employee");

describe("Instantiate", () => {
  const testEmployee = new Employee();
  expect(typeof(testEmployee)).toBe("object");
});

describe("Name", () => {
  const name = "Chang";
  const test = new Employee(name);
  expect(typeof(test.name)).toBe(name);
});

describe("Id", () => {
  const id = 1996;
  const test = new Employee("Chang", id);
  expect(typeof(test.id)).toBe(id);
});

describe("Email", () => {
  const email = "test@gmail.com";
  const test = new Employee("Chang", 1, email);
  expect(typeof(test.email)).toBe(email);
});

describe("getName Method", () => {
  const name = "Chang";
  const test = new Employee(name);
  expect(typeof(test.getName())).toBe(name);
});

describe("getId Method", () => {
  const id = 1996;
  const test = new Employee(id);
  expect(typeof(test.getId())).toBe(id);
});

describe("getEmail Method", () => {
  const email = "test@gmail.com";
  const test = new Employee(email);
  expect(typeof(test.getEmail())).toBe(email);
});

describe("getRole Method", () => {
  const role = "Employee";
  const test = new Employee(role);
  expect(typeof(test.getRole())).toBe(role);
});