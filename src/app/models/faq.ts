export class Faq {
  Question: string;
  Answer: string;

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
