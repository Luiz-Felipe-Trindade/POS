import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  imports: [FormsModule],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css',
})
export class CadastroComponent {
  email: string = '';
  password: string = '';
  confirmpassword: string = '';


  constructor(private router: Router) {}

  cadastrar() {
    console.log('Email:', this.email);
    console.log('Senha:', this.password);

    this.router.navigate(['/login']);
  }
}
