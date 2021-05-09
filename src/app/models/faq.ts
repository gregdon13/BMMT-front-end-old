export class Faq {

  private _ID: number;
  Question: string;
  Answer: string;

  constructor(
  ID: number,
  Question: string,
  Answer: string
  ){}

  get ID(): number {
    return this._ID;
  }

  set ID(value: number) {
    this._ID = value;
  }

  get quesiton(): string {
    return this.Question;
  }

  set question(value: string) {
    this.Question = value;
  }

  get answer() {
    return this.Answer;
  }

  set answer(value) {
    this.Answer = value;
  }
}
