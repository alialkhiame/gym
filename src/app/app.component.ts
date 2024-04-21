import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import{HomeComponent} from  './home/home.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ HomeComponent],  // Add this if you are using forms features
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'calenderFrontend';

}
