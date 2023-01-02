const Employee = require("../lib/Employee");

test("Instantiate", () => {
  const testEmployee = new Employee();
  expect(typeof(testEmployee)).toBe("object");
});

test("Name", () => {
const name = "Chang";
  const test = new Employee(name);
  expect(test.name).toBe(name);
});

test("Id", () => {
  const id = 1996;
  const test = new Employee("Chang", id);
  expect(test.id).toBe(id);
});

test("Email", () => {
  const email = "test@gmail.com";
  const test = new Employee("Chang", 1, email);
  expect(test.email).toBe(email);
});

test("getName Method", () => {
  const name = "Chang";
  const test = new Employee(name);
  expect(test.getName()).toBe(name);
});

test("getId Method", () => {
  const id = 1996;
  const test = new Employee("Chang", id);
  expect(test.getId()).toBe(id);
});

test("getEmail Method", () => {
  const email = "test@gmail.com";
  const test = new Employee("Chang", 1, email);
  expect(test.getEmail()).toBe(email);
});

test("getRole Method", () => {
  const role = "Employee";
  const test = new Employee("Chang", 1, "lee@gmail");
  expect(test.getRole()).toBe(role);
});