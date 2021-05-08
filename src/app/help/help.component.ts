import {Component, OnInit} from '@angular/core';
import {Faq} from "../models/faq";
import {BmmtService} from "../bmmt.service";

@Component({
  selector: 'app-help',
  templateUrl: 'help.component.html',
  styleUrls: ['./help.component.css']
})
export class HelpComponent implements OnInit{

  faq: Faq=new Faq('What is the meaning of life?','42');
  faqObject: Faq;
  question: string;
  answer:string;

  constructor(private faqService: BmmtService) {
    this.getQuestion();
    this.getAnswer();
  }
  ngOnInit() {
  }

  share() {
    window.alert(this.getFaqAnswer());
  }

  getQuestion(): void {
    this.faqService.getFAQById(1).subscribe(faq => this.question = faq.question);
  }

  getAnswer(): void {
    this.faqService.getFAQById(1).subscribe(faq => this.answer = faq.answer);
  }

  getFaqQuestion(): string {
    return this.faq.Question;
  }

  getFaqAnswer(): string {
    return this.faq.Answer;
  }
}
