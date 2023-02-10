import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../security/_services/auth.service';
import { StorageService } from '../../security/_services/storage.service';
import { Router } from '@angular/router';
import { NotifierService } from 'src/app/service/notifier.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: any = {
    username: null,
    password: null
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];

  constructor(private authService: AuthService, 
              private storageService: StorageService, 
              private router: Router,
              private toast: NotifierService) { }

  ngOnInit(): void {
    if (this.storageService.isLoggedIn()) {
      this.isLoggedIn = true;
      this.roles = this.storageService.getUser().role;
    }
  }

  onSubmit(): void {
    const { username, password } = this.form;

    this.authService.login(username, password).subscribe({
      next: data => {
        this.storageService.saveUser(data);
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.storageService.getUser().role;
        this.toast.ShowSucces("New Notification", "Logged in succesfully");
        setTimeout(() => {
          this.router.navigate(['']);
      }, 1000);  
      },
      error: err => {
        this.errorMessage = err;
        this.isLoginFailed = true;
        this.toast.ShowError("New Notification", "Login failed")
      }
    });
    
  }

  reloadPage(): void {
    window.location.reload();
  }
}
