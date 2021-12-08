import { AfterViewInit, Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-contact',
  templateUrl: './form-contact.component.html',
  styleUrls: ['./form-contact.component.scss']
})
export class FormContactComponent implements OnInit {
  
  contactForm: FormGroup;
  myplaceHolder: string =''

  @ViewChild('fullName', {read: ElementRef}) fullName: ElementRef<HTMLElement>;
  @ViewChild('nickName', {read: ElementRef}) nickName: ElementRef<HTMLElement>;
  @ViewChild('email', {read: ElementRef}) email: ElementRef<HTMLElement>;

  firstNameAutofilled: boolean;
  lastNameAutofilled: boolean;

  fullNameFormControl = new FormControl('', [
    Validators.required,
  ]);
  nickNameFormControl = new FormControl('', [
    Validators.required,
  ]);
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  @Output() newContactEvent = new EventEmitter();

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    
  }

  onSubmitContact(){
    
    let contactInfo = {
      fullName: this.fullNameFormControl.value,
      nickName: this.nickNameFormControl.value,
      email: this.emailFormControl.value
    }
    
    this.newContactEvent.emit({ contact: contactInfo });
  }


  

 checkPlaceHolder() {
    if (this.myplaceHolder) {
      this.myplaceHolder = ''
      return;
    } else {
      this.myplaceHolder = ''
      return
    }
  }
}
