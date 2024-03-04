abstract class Department {
  // private id: string;
  // private name: string;
  static fiscalYear = 2023;
  protected employees: string[] = [];
  constructor(protected readonly id: string, public name: string) {
    // this.name = n;
  }

  static createEmployee(name: string) {
    return {name: name};
  }

  abstract describe(this: Department): void;
  addEmploy(employee: string) {
    // this.id = "d3";
    this.employees.push(employee);
  }
  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class ITDepartment extends Department {
  admins: string[];
  constructor(id: string, admins: string[]) {
    super(id, "IT");
    this.admins = admins;
  }
  describe() {
    console.log("IT Department - ID: " + this.id);
  }
}

class AccountDepartment extends Department {
  private lastReport: string;
  private static instance: AccountDepartment;
  get mostResentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error("no report found");
  }
  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error("Please pass in a valid value");
    }
    this.addReport(value);
  }
  private constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
    this.lastReport = reports[0];
  }
  static getInstance() {
    if (AccountDepartment.instance) {
      return this.instance;
    }
    this.instance = new AccountDepartment("d2", []);
    return this.instance;
  }
  describe() {
    console.log("Accounting Department - id: " + this.id);
  }
  addEmployee(name: string) {
    if (name === "Max") {
      return;
    }
    this.employees.push(name);
  }
  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }
  printReports() {
    console.log(this.reports);
  }
}

// const it = new IDDepartment("d1", ["Max", "Robert"]);
// it.name = "it 2";
// it.addEmploy("Max");
// it.addEmploy("Manu");
// it.describe();
// it.printEmployeeInformation();

const employee1 = Department.createEmployee("Max");
console.log(employee1, Department.fiscalYear);

// const accounting = new AccountDepartment("a1", []);
const accounting = AccountDepartment.getInstance();
const accounting2 = AccountDepartment.getInstance();

console.log(accounting, accounting2);

accounting.mostRecentReport = "asdf"; //setter
accounting.addReport("something went wrong");
console.log(accounting.mostResentReport); // getter
accounting.addEmploy("Max");
// accounting.printReports();
// accounting.printEmployeeInformation();
accounting.describe();

// const itCopy = {name: "dummy", describe: it.describe};
// itCopy.describe();
