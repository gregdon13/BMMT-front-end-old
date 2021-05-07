export class Contact {
  Number: string;
  Email: string;
  Department: string;

  get number(): string {
    return this.Number;
  }

  set number(value) {
    this.Number = value;
  }

  get email(): string {
    return this.Email;
  }

  set email(value){
    this.Email = value;
  }

  get department(): string {
    return this.Department;
  }

  set department(value) {
    this.Department = value;
  }
}
