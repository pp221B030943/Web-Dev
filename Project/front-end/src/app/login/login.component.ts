import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  isLogin: boolean = true;
  credentials: Credentials = { email: '', password: '' };
  registration: Registration = { name: '', email: '', password: '', confirmPassword: '' };

  constructor() { }

  ngOnInit(): void {
  }

  toggleIsLogin(): void {
    this.isLogin = !this.isLogin;
  }

  login(): void {
    // TODO: implement login logic
    console.log('Logging in with:', this.credentials);
  }

  register(): void {
    // TODO: implement registration logic
    console.log('Registering user:', this.registration);
  }

}

interface Credentials {
  email: string;
  password: string;
}

interface Registration {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}
