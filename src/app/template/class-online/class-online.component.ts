import { Component, ElementRef, HostListener, OnInit} from '@angular/core';
import { HeaderComponent } from '@components/class-online/header/header.component';
import { BannerComponent } from '@components/class-online/banner/banner.component';
import { HeaderMenuComponent } from '@components/class-online/header-menu/header-menu.component';
import { AboutUsComponent } from '@components/class-online/about-us/about-us.component';
import { NewsComponent } from '@components/class-online/news/news.component';
import { AchievementComponent } from '@components/class-online/achievement/achievement.component';

AchievementComponent
@Component({
  selector: 'app-class-online',
  standalone: true,
  imports: [
    HeaderComponent,
    BannerComponent,
    HeaderMenuComponent,
    AboutUsComponent,
    NewsComponent,
    AchievementComponent
  ],
  templateUrl: './class-online.component.html',
  styleUrl: './class-online.component.css'
})
export class ClassOnlineComponent implements OnInit {
  bannerEl: any;
  headerEl: any;

  bannerIsScroll: boolean = false;

  constructor(
    private el: ElementRef
  ){ }

  ngOnInit(): void {
    this.headerEl = this.el.nativeElement.querySelector('#headerId').offsetTop;
    this.bannerEl = this.el.nativeElement.querySelector('#bannerId').offsetTop;
  }

  @HostListener('window:scroll', [])
  onWindowScroll(){
    this.bannerIsScroll = window.scrollY > this.headerEl;
  }
}
