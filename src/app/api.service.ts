import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private api: HttpClient) { }

  CreateUser(body:any){
    return this.api.post("http://127.0.0.1:5000/api/user/create", body)
  }

  getInfo(){
    return this.api.get("https://api.agify.io?name[]=michael&name[]=matthew&name[]=jane")
  }

}
