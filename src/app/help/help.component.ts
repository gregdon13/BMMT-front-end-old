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
    // this.getQuestion();
    // this.getAnswer();
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

  // getQuestion(): void {
  //   this.faqService.getFAQById(1).subscribe(faq => this.question = faq.question);
  // }
  //
  // getAnswer(): void {
  //   this.faqService.getFAQById(1).subscribe(faq => this.answer = faq.answer);
  // }

}
