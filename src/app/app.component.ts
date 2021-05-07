import { Component } from '@angular/core';
import {BmmtService} from './bmmt.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [BmmtService]
})
export class AppComponent {
  title = 'BMMT';
}
