import { Component } from '@angular/core';
import { PresentationComponent } from '../../core/components/presentation/presentation.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    PresentationComponent
  ],
  templateUrl: './home.component.html',
  styles: `
    .custom-gradient {
      background: radial-gradient(at top, rgb(12, 45, 97) 0%, rgb(10, 36, 79) 10%,  rgb(11, 16, 56) 30%, rgb(3, 8, 30) 65%);
    }
  `
})
export class HomeComponent {

}
