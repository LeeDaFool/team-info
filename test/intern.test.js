const Intern = require("../lib/Intern");

test("School constructor", () => {
  const testValue = "UCF";
  const e = new Intern("Lee", 1996, "lee@gmail.com", testValue);
  expect(e.school).toBe(testValue);
});

test("Get role: Intern", () => {
  const testValue = "Intern";
  const e = new Intern("Lee", 1996, "lee@gmail.com", "UCF");
  expect(e.getRole()).toBe(testValue);
});

test("Get school name", () => {
  const testValue = "UCF";
  const e = new Intern("Lee", 1996, "lee@gmail.com", testValue);
  expect(e.getSchool()).toBe(testValue);
});