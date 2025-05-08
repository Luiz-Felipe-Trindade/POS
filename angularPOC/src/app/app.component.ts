import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RecoverComponent } from './components/recover/recover.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RecoverComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angularPOC';
}
