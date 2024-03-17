const employee = new Object();
function updateEmployeeWithKeyAndValue(employee, key, value) {
  employee = { ...employee };
  employee[key] = value;
  return employee;
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
  employee[key] = value;
  return employee;
}
function deleteFromEmployeeByKey(employee, key) {
  employee = { ...employee };
  delete employee[key];
  return employee;
}
deleteFromEmployeeByKey();
function destructivelyDeleteFromEmployeeByKey(employee, key) {
  delete employee[key];
  return employee;
}
