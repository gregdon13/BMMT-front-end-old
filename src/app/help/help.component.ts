import {Component, DoCheck, OnInit} from '@angular/core';
import {Faq} from "../models/faq";
import {BmmtService} from "../bmmt.service";

@Component({
  selector: 'app-help',
  templateUrl: 'help.component.html',
  styleUrls: ['./help.component.css']
})
export class HelpComponent implements OnInit, DoCheck{

  faqObject: { question: string; answer: string };
  // id: number;
  // question: string;
  // answer:string;


  constructor(private faqService: BmmtService) {
  }

  ngOnInit() {
    this.faqObject = {
      question: 'What is the meaning of life?',
      answer: ' Answer: 42! '
    }
  }

  ngDoCheck() {
    console.log('checked');
  }

  share() {
    window.alert(this.faqObject.answer);
  }

  getQuestion(): string {
    this.faqService.getFAQById(1).subscribe(faq => this.faqObject.question = faq.question);
    return this.faqObject.question;
  }

  getAnswer(): string {
    this.faqService.getFAQById(1).subscribe(faq => this.faqObject = faq.answer);
    return this.faqObject.answer
  }

}
