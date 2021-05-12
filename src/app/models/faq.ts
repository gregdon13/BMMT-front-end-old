export class Faq {

  private _ID: number;
  private _Question: string;
  private _Answer: string;

  constructor(){}

  setQuestion(question: string){
    this._Question = question;
  }

  setAnswer(answer: string){
    this._Answer = answer;
  }

  getQuestion(): string {
    return this._Question;
  }

  getAnswer(): string {
    return this._Answer;
  }

  getID(): number {
    return this._ID;
  }
}
