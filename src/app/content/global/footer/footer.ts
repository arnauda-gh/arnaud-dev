import { Component, OnInit } from '@angular/core';
import {LanguageService} from '../../../language.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.html',
  styleUrls: ['./footer.scss']
})
export class Footer implements OnInit {

  constructor(public langService: LanguageService) { }

  ngOnInit(): void {
  }

}
