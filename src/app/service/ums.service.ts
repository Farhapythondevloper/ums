import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UmsService {

  constructor(private http:HttpClient) { }

  baseUrl : string = 'http://localhost:9090/'

  getCountries(){
    // return this.http.get('http://localhost:9090/countries')
    return this.http.get(`${this.baseUrl}countries`)
  }

  getStateByCountryId(id:number){
    // return this.http.get('http://localhost:9090/states/'+id)
    return this.http.get(`${this.baseUrl}states/`+id)
    
  }

  getcityByStateId(id:number){
    return this.http.get(`${this.baseUrl}cities/`+id)
    // return this.http.get('http://localhost:9090/cities/'+id)
  }

  uniqueEmailheck(email:any){
    return this.http.get(`${this.baseUrl}emailcheck/`+email, {responseType:'text'})
    // return this.http.get('http://localhost:9090/emailcheck/'+email, {responseType:'text'})
  }

  saveUser(data:any){
    // return this.http.post(`${this.baseUrl}saveUser`,data,{responseType:'text'})
    return this.http.post('http://localhost:9090/saveUser', data,{responseType:'text'})
  }

  loginUserData(data:any){
    return this.http.post(`${this.baseUrl}login`,data, {responseType:'text'})
    // return this.http.get('http://localhost:9090/states/'+id)
  }

  forgetPass(email:any){
    return this.http.get(`${this.baseUrl}forgotPwd/`+email, {responseType:'text'})
    // return this.http.get('http://localhost:9090/states/'+id)
  }

  unlockUser(data:any){
    return this.http.post(`${this.baseUrl}unlock`,data, {responseType:'text'})
    // return this.http.get('http://localhost:9090/states/'+id)
    }
}
