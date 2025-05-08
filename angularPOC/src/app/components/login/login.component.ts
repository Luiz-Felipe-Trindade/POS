import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private router: Router) {}

  login() {
    console.log('Email:', this.email);
    console.log('Senha:', this.password);

    this.router.navigate(['/dashboard']);
  }
  recuperar() {
    this.router.navigate(['/recovery']);
  }
}
