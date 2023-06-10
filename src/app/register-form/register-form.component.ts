import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UmsService } from '../service/ums.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent {

  constructor(private registerservice:UmsService){
  this.getCountry()
  }

  countryId:any;
  stateId:any;
  cityId:any;

  signUpData=new FormGroup({
    cityId: new FormControl(null,[Validators.required]),
    countryId: new FormControl(null,[Validators.required ]),
    dob: new FormControl(null,[Validators.required]),
    email: new FormControl(null,[Validators.required]),
    fname: new FormControl(null,[Validators.required]),
    lname: new FormControl(null,[Validators.required]),
    gender: new FormControl(null),
    phno: new FormControl(null,[Validators.required]),
    stateId: new FormControl(null,[Validators.required]),

})



sendSignUpData(){
  console.log(this.signUpData.value);

}

getCountry(){
  this.registerservice.getCountries().subscribe(
    data => {console.log(data) 
    this.countryId = data;
    }
  )
}

getStateByCountryId(id:any){
  this.registerservice.getStateByCountryId(id).subscribe(
    data => {console.log(data)
    this.stateId = data;
  }
  )
}

getCityByStateId(id:any){
  this.registerservice.getcityByStateId(id).subscribe(
    data => {console.log(data)
      this.cityId =data;
    }
  )
}

checkEmail(email:any){
  this.registerservice.uniqueEmailheck(email).subscribe(
    res => {console.log(res)
      alert(res);
    }
  )

}

registerUser(){
  console.log(this.signUpData.value);
  this.registerservice.saveUser(this.signUpData.value).subscribe(
    res => {console.log(res)
      alert(res);
    }
  )
  
}


}



