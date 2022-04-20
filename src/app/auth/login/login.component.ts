import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild('password') passwordRef!: ElementRef;
  @ViewChild('togglePassword') togglePasswordRef!: ElementRef;
  public loginForm = this.fb.group({
    email: [localStorage.getItem('email') || '', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
    remember: [localStorage.getItem('remember') || '']
  });
  constructor(private authSvc: AuthService, private router: Router, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.loginForm.value.remember = false

  }

  async onGoogleLogin() {
    try {
      await this.authSvc.loginGoogle().then(() => {

        this.router.navigateByUrl('dashboard')
      }).catch((e) => {
        Swal.fire('ERROR', 'usuario invalido', 'error');
      })

    } catch (e: any) {
      Swal.fire('ERROR', e.message, 'error');
    }
  }

  async login() {


    try {
      await this.authSvc.login(this.loginForm.value.email, this.loginForm.value.password).then((user) => {
        if (user && user.user.emailVerified) {

          this.router.navigateByUrl('/dashboard');

        } else if (user) {

          this.router.navigateByUrl('/verificar-email');

        } else {
          Swal.fire({
            icon: 'error',
            title: 'El email o password son incorrectos...',
            confirmButtonText: 'Aceptar',
            allowOutsideClick: false
          }).then((result) => {

            if (result.value) {
              localStorage.removeItem('email');
              localStorage.removeItem('remember');
              this.loginForm.reset();
            }

          })
        }
      })
    } catch (e: any) {

      console.log('ERROR', e.message);

    }

  }

  onCheckboxChange(e: any) {

    console.log(this.loginForm.value.email)

    if (this.loginForm.value.email === '' || localStorage.getItem('email') === '' || this.loginForm.value.email === null) {

      Swal.fire('Error', 'Debe llenar el email', 'error')
      localStorage.removeItem('email');
      localStorage.removeItem('remember');
      this.loginForm.reset();
    } else {

      if (e.target.checked) {

        localStorage.setItem('email', this.loginForm.value.email);
        localStorage.setItem('remember', 'true');


      } else {
        this.loginForm.reset();
        localStorage.removeItem('email');
        localStorage.removeItem('remember');
      }

    }
  }

  hideShowPass() {
    const inputPass = this.passwordRef.nativeElement;
    const iconEye = this.togglePasswordRef.nativeElement;

    if (inputPass.getAttribute('type') === 'password') {

      inputPass.setAttribute('type', 'text');
      iconEye.classList.remove('fa-eye-slash')
      iconEye.classList.add('fa-eye');

    } else {

      inputPass.setAttribute('type', 'password');
      iconEye.classList.remove('fa-eye')
      iconEye.classList.add('fa-eye-slash');
    }
  }

}
