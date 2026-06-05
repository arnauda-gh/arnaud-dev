import { Component, OnInit } from '@angular/core';
import {LanguageService} from '../../../language.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.html',
  styleUrls: ['./contact.scss']
})
export class Contact implements OnInit {

  constructor(public langService: LanguageService) { }

  ngOnInit(): void {
  }

}
