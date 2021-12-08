import { Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { ContactService } from './service/contact.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  styles: [`
    .selected {
      background-color: #3E4D5C;
    }
  `]
})
export class AppComponent implements OnInit, OnChanges {
  keyUpVal: string;
  contacts: any[]=[]
  inputValue: string = '';
  nickName: string = '';
  email: string = '';
  bntStyle: string;
  selectedItem:any;
  keyUpRes: string;
  isUpdated: boolean = false
  visibleInput: string = 'isNotVisibleInput';

  constructor(private contactService: ContactService){}

  ngOnInit(){
    this.contacts = this.contactService.contact
    
  }

  /**
   * @param newContactEvent
   */
  newContact(newContactEvent: any) {
    this.contacts.push(newContactEvent.contact)
    this.contactService.contact = this.contacts
  }

  newUpdated(keyUpRes: any) {
    this.contacts = this.contactService.contact
    this.isUpdated = true
  }


  onTitleValue(value: any, index:any){
    this.nickName = value.nickName
    this.email = value.email
    this.inputValue = value.fullName
    this.selectedItem = index;
    this.visibleInput = 'isVisible'
  }

  ngOnChanges(changes: SimpleChanges){
    
  }

}
