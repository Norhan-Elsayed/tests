import { CanActivateFn,Router } from '@angular/router';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const _Router = inject(Router)
  if(localStorage.getItem('uRole') !== null){  //if user already login
    return true;
  }
  else{
    _Router.navigate(['/login']) // if not login please login again
    return false;
  }
};
