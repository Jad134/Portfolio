import { Component, ViewChild, ElementRef } from '@angular/core';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-contact-page',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './contact-page.component.html',
  styleUrl: './contact-page.component.scss'
})
export class ContactPageComponent {

  @ViewChild('myForm') myForm!: ElementRef;
  @ViewChild('nameField') nameField!: ElementRef;
  @ViewChild('mailField') mailField!: ElementRef;
  @ViewChild('textField') textField!: ElementRef;
  @ViewChild('sendButton') sendButton!: ElementRef;

  async sendMail() {

    console.log('sending mail', this.myForm);
    let nameField = this.nameField.nativeElement;
    let mailField = this.mailField.nativeElement;
    let textField = this.textField.nativeElement;
    let sendButton = this.sendButton.nativeElement;

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
    await fetch('https:jad-portfolio.de/send_mail.php',
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
