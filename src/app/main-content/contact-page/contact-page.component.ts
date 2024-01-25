import { Component, ViewChild, ElementRef } from '@angular/core';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { send } from 'process';


@Component({
  selector: 'app-contact-page',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './contact-page.component.html',
  styleUrl: './contact-page.component.scss'
})
export class ContactPageComponent {

  constructor() {

  }

  @ViewChild('myForm') myForm!: ElementRef;
  @ViewChild('nameField') nameField!: ElementRef;
  @ViewChild('mailField') mailField!: ElementRef;
  @ViewChild('textField') textField!: ElementRef;
  @ViewChild('sendButton') sendButton!: ElementRef;
  @ViewChild('infoField') infoField!: ElementRef;
  @ViewChild('nameRequired') nameRequired!: ElementRef;
  @ViewChild('mailRequired') mailRequired!: ElementRef;
  @ViewChild('textRequired') textRequired!: ElementRef;


  privacyChecked: boolean = false;

  togglePrivacy() {
    this.privacyChecked = !this.privacyChecked;
    let sendButton = this.sendButton.nativeElement;
    let infoField = this.infoField.nativeElement;

    if (this.privacyChecked) {
      sendButton.disabled = false;
      infoField.style = 'visibility: hidden; '
    } else {
      sendButton.disabled = true;
    }
  }

  privacyWarning() {
    let infoField = this.infoField.nativeElement;
    let sendButton = this.sendButton.nativeElement;
    console.log('ja es geht auch disabled')

    if (sendButton.disabled == true) {
      infoField.style = 'visibility: visible; '
    } else {
      infoField.style = 'visibility: hidden; '
    }
  }

  validateForm(): boolean {
    let nameField = this.nameField.nativeElement;
    let mailField = this.mailField.nativeElement;
    let textField = this.textField.nativeElement;
    let textRequired = this.textRequired.nativeElement;
    let mailRequired = this.mailRequired.nativeElement;
    let nameRequired = this.nameRequired.nativeElement;

    let isValid = true;

    if (!nameField.value) {
      nameRequired.style = 'visibility: visible;';
      isValid = false;
    }
    else{
      nameRequired.style = 'visibility: hidden;';
    }
    if (!mailField.value) {
      mailRequired.style = 'visibility: visible;';
      isValid = false;
    }else if (!mailField.value.includes('@')) { 
      mailRequired.style = 'visibility: visible;';
      isValid = false;
    }else{
      mailRequired.style = 'visibility: hidden;';
    }
    if (!textField.value) {
      textRequired.style = 'visibility: visible;';
      isValid = false;
    }
    else{
      textRequired.style = 'visibility: hidden;';
    }

    return isValid;
  }


  async sendMail() {

    console.log('sending mail', this.myForm);
    let nameField = this.nameField.nativeElement;
    let mailField = this.mailField.nativeElement;
    let textField = this.textField.nativeElement;
    let sendButton = this.sendButton.nativeElement;
   
      if (this.validateForm()) {

      
      nameField.disabled = true;
      mailField.disabled = true;
      textField.disabled = true;
      sendButton.disabled = true;
      // EVTL Animation
      let fd = new FormData();
      fd.append('name', nameField.value);
      fd.append('email', mailField.value);
      fd.append('message', textField.value)

      //senden
      await fetch('/send_mail.php',
        {
          method: 'POST',
          body: fd
        }

      );

      // Text anzeigen
      nameField.disabled = false;
      mailField.disabled = false;
      textField.disabled = false;
      sendButton.disabled = false;

      nameField.value = '';
      mailField.value = '';
      textField.value = '';
    
  }

  }
}
