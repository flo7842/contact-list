import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  set contact(t: any) {
    localStorage.setItem('contacts', JSON.stringify(t));
  }

  get contact(): any {
    return JSON.parse(localStorage.getItem('contacts') || '');
  }


  constructor() { }
}
