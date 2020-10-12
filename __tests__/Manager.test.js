const Employee = require("../lib/Employee");
//name, id and email
test("creates an employee object", () => {
  const employee = new Employee("Ron", 1, "Ron@letters.com");

  expect(employee.name).toEqual(expect.any(String));
  expect(employee.name.length).toBeGreaterThan(2);
  expect(employee.id).toEqual(expect.any(Number));
  expect(employee.email).toEqual(expect.stringContaining("@"));
});
// getName()
test("get name from getName()", () => {
  const employee = new Employee("Ron");

  expect(employee.getName()).toEqual(expect.any(String));
});
// getId()
test("get ID from getID()", () => {
  const employee = new Employee("Ron", 1);

  expect(employee.getId()).toBe(1);
});

// getEmail()
test("get ID from getID()", () => {
  const employee = new Employee("Ron", 1, "Ron@letters.com");

  expect(employee.getEmail()).toBe("Ron@letters.com");
});

// getRole() // Returns 'Employee'
test("get role from getRole()", () => {
  const employee = new Employee("Ron", 1, "Ron@letters.com", "Employee");
 
  expect(employee.getRole()).toBe("Employee");
});

