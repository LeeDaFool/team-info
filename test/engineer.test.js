const Engineer = require("../lib/Engineer");

test("Get github account", () => {
  const testValue = "account";
  const e = new Engineer("Lee", 1996, "lee@gmail.com", testValue);
  expect(e.github).toBe(testValue);
});

test("Get role: Engineer", () => {
  const testValue = "Engineer";
  const e = new Engineer("Lee", 1996, "lee@gmail.com", "github");
  expect(e.getRole()).toBe(testValue);
});

test("Get github user", () => {
  const testValue = "username";
  const e = new Engineer("Lee", 1996, "lee@gmail.com", testValue);
  expect(e.getGithub()).toBe(testValue);
});