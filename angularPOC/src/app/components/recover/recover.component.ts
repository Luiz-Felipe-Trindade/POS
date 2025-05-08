import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-recover',
  imports: [FormsModule],
  templateUrl: './recover.component.html',
  styleUrls: ['./recover.component.css'],
})
export class RecoverComponent {
  email: string = '';

  constructor(private router: Router) {}

  recover() {
    console.log('E-mail para recuperação:', this.email);

    this.router.navigate(['/login']);
  }
}

