import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {LanguageService} from '../../../language.service';

@Component({
  selector: 'app-me',
  templateUrl: './me.html',
  styleUrls: ['./me.scss']
})
export class Me implements OnInit {

  member_count: number = -1;

  constructor(private _httpClient: HttpClient, public langService: LanguageService) {
  }

  ngOnInit(): void {
    this.fetchMember();
  }

  public fetchMember() {
    this._httpClient.get<number>("https://devarea.fr/data/stats/member_count")
      .subscribe(data => this.member_count = data);
  }

}
