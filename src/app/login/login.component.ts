import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UmsService } from '../service/ums.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private loginregister: UmsService){}

  login = new FormGroup({
    email:new FormControl(null,[Validators.required]),
    pwd:new FormControl(null,[Validators.required])
  })

  loginUser(){
    console.log(this.login.value)
    this.loginregister.loginUserData(this.login.value).subscribe(
      res => {console.log(res);
      }
    )
  }

}
