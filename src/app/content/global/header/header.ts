import {Component, OnInit} from '@angular/core';
import {LanguageService} from '../../../language.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.html',
  styleUrls: ['./header.scss']
})
export class Header implements OnInit {

  constructor(public langService: LanguageService) {
  }

  ngOnInit(): void {
  }

}
