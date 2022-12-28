import { Injectable } from '@angular/core';
import { Router, TitleStrategy } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class BackService {

  constructor(
    private router: Router
  ) { }

  back() {
    this.router.navigateByUrl('home');
  }
}

