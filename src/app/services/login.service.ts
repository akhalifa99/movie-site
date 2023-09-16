import { Injectable } from "@angular/core";
import * as users from '../../assets/users.json';



@Injectable({providedIn: 'root'})
export class LoginService{

    user:any = users;
    logged:boolean=false;
    
    constructor(){}
    

     login(email:string, passwd:string):boolean{

    for(let i=0;i<this.user.length;i++){
        if(email===this.user[i].email&&passwd===this.user[i].password){
            this.logged=true;
            localStorage.setItem('logged',''+this.logged)
            
            return true
        }
        }
       
        this.logged=false;
        localStorage.setItem('logged',''+this.logged)
        return false
    }
    
    

}