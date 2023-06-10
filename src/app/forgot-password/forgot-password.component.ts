import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UmsService } from '../service/ums.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent {
  
  constructor(private forgotregister: UmsService){}

  forgot: FormGroup = new FormGroup({
    emailId: new FormControl()
  })

  forgotUser(){
    console.log(this.forgot.value)
    this.forgotregister.forgetPass(this.forgot.value.emailId).subscribe(
      res => {console.log(res);
      }
    )
    
  }
}
