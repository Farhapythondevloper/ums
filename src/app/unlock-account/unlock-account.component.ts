import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UmsService } from '../service/ums.service';

@Component({
  selector: 'app-unlock-account',
  templateUrl: './unlock-account.component.html',
  styleUrls: ['./unlock-account.component.css']
})
export class UnlockAccountComponent {

  constructor(private unlockregister: UmsService){}


unlock: FormGroup = new FormGroup({
  email: new FormControl(),
  tempPwd: new FormControl(),
  confirmPwd: new FormControl(),
  newPwd: new FormControl()
})

unlockAcc(){
  console.log(this.unlock.value)
  this.unlockregister.unlockUser(this.unlock.value).subscribe(
    res => {console.log(res)}
  )
  
}
}
