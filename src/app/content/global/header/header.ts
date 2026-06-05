import {Component, OnInit, HostListener} from '@angular/core';
import {LanguageService} from '../../../language.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.html',
  styleUrls: ['./header.scss']
})
export class Header implements OnInit {
  private lastScrollTop: number = 0;
  public isHidden: boolean = false;

  constructor(public langService: LanguageService) {
  }

  ngOnInit(): void {
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop < 50) {
      this.isHidden = false;
    } else {
      if (scrollTop > this.lastScrollTop) {
        this.isHidden = true;
      } else {
        this.isHidden = false;
      }
    }
    this.lastScrollTop = scrollTop;
  }

}
