import { Component } from '@angular/core';
import { HeaderComponent } from '@components/class-online/header/header.component';
import { BannerComponent } from '@components/class-online/banner/banner.component';
import { HeaderMenuComponent } from '@components/class-online/header-menu/header-menu.component';
import { AboutUsComponent } from '@components/class-online/about-us/about-us.component';
@Component({
  selector: 'app-class-online',
  standalone: true,
  imports: [
    HeaderComponent,
    BannerComponent,
    HeaderMenuComponent,
    AboutUsComponent
  ],
  templateUrl: './class-online.component.html',
  styleUrl: './class-online.component.css'
})
export class ClassOnlineComponent {

}
