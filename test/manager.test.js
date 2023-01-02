const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee")

test("Office number constructor", () => {
  const testValue = 804;
  const e = new Manager("Lee", 1996, "lee@gmail.com", testValue);
  expect(e.officeNum).toBe(testValue);
});

test("Get role: Manager", () => {
  const testValue = "Manager";
  const e = new Manager("Lee", 1996, "lee@gmail.com", 804);
  expect(e.getRole()).toBe(testValue);
});

test("Get office number", () => {
  const testValue = 804;
  const e = new Manager("Lee", 1996, "lee@gmail.com", testValue);
  expect(e.getOfficeNum()).toBe(testValue);
});