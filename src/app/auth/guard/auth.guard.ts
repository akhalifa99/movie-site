import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { LoginService } from '../login/login.service';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router)
  const service = inject(LoginService)

  if(service.logged || localStorage.getItem('logged')==='true'){
    return true
  }
  else{
    alert('access denied, you need to login')
    router.navigate([''])
    return false
  }
};
