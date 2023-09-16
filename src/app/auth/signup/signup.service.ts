import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import * as users from '../../../assets/users.json';



@Injectable({providedIn: 'root'})
export class signupService{
    constructor(private http: HttpClient) { }
    user:any = users;
    signup(email:string, passwd:string):boolean{
        for(let i=0;i<this.user.length;i++){
            if(email===this.user[i].email){
                return false
            }
        }
        
        const url = 'assets/users.json';
        const newData = {"email":email,"password":passwd}

        this.http.post(url, newData).subscribe(
        (response) => {
        console.log('Data added successfully:', response);
            }
                    );
        return true
    }

}