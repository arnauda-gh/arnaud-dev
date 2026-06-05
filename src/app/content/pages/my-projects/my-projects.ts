import {Component, OnInit} from '@angular/core';
import {LanguageService} from '../../../language.service';

@Component({
  selector: 'app-my-projects',
  templateUrl: './my-projects.html',
  styleUrls: ['./my-projects.scss']
})
export class MyProjects implements OnInit {

  constructor(public langService: LanguageService) {
  }

  ngOnInit(): void {
  }

}
