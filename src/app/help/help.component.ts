import {Component, OnInit} from '@angular/core';
import {Faq} from "../models/faq";

@Component({
  selector: 'app-help',
  templateUrl: 'help.component.html',
  styleUrls: ['./help.component.css']
})
export class HelpComponent implements OnInit{

  faq: Faq=new Faq('What is the meaning of life?','42');

  constructor() {
  }
  ngOnInit() {
  }

  share() {
    window.alert(this.faq.Answer);
  }

}
