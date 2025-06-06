import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  constructor(private router: Router) {}
  entrar() {
    this.router.navigate(['/login']);
  }
  cadastrar() {
    this.router.navigate(['/cadastro']);
  }
}
