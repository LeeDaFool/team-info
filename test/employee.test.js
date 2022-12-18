const { describe } = require("yargs");
const Employee = require("../lib/Employee");

describe("Employee class", () => {
  describe("getName, getId, getEmail, getRole method", () => {
    const employee = new Employee();

    expect(employee).toEqual({name: "Eva", id: 001, email: "eva100@gamil.com", role: "Employee" })
  })
}
)