import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChange, SimpleChanges } from '@angular/core';
import { ContactService } from '../service/contact.service';

@Component({
  selector: 'app-update-contact',
  templateUrl: './update-contact.component.html',
  styleUrls: ['./update-contact.component.scss']
})
export class UpdateContactComponent implements OnInit {

  @Input() inputVal:string;
  @Input() nickName:string;
  @Input() email:string;
  @Input() visibleInput:string;
  keyUpVal: string = "";
  @Output() keyUpRes = new EventEmitter<string>();
  isFocused: boolean = false;

  constructor(private contactService: ContactService) { }

  ngOnInit(): any {
    this.keyUpVal = this.inputVal
  }

  onKeyUp(e:any){
    this.isFocused = true
    this.keyUpVal = e.target.value
  }

  onChangeEvent(event: any){
    let res = this.update(this.contactService.contact, this.inputVal, event.target.value)
    this.contactService.contact = res
    this.keyUpRes.emit(event.target.value)
  }

  update = (arrObj:any, oldValue:any, newValue:any) =>
      arrObj.map((elem:any) =>  (elem.fullName === oldValue)       
      ? ({ ...elem, fullName: newValue })    
      : elem   
  );
}
