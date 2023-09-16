import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { LoginService } from '../../services/login.service';

export const logoutGuard: CanActivateFn = (route, state) => {
  const router = inject(Router)
  const service = inject(LoginService)

  if(service.logged || localStorage.getItem('logged')==='true'){
    alert('access denied, you need to logout')
    router.navigate(['catalog'])
    return false
  }
  else{
    return true
  }
};
