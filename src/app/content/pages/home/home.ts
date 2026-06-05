import { Component, OnInit } from '@angular/core';
import {LanguageService} from '../../../language.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  styleUrls: ['./home.scss']
})
export class Home implements OnInit {

  constructor(public langService: LanguageService) { }

  ngOnInit(): void {
  }

}
