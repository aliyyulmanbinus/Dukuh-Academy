import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/class-online/header/header.component';

@Component({
  selector: 'app-class-online',
  standalone: true,
  imports: [
    HeaderComponent
  ],
  templateUrl: './class-online.component.html',
  styleUrl: './class-online.component.css'
})
export class ClassOnlineComponent {

}
