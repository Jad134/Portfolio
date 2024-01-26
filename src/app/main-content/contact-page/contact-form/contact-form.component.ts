import { Component, ViewChild, ElementRef, inject } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, ],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss'
})
export class ContactFormComponent {
  @ViewChild('myForm') myForm!: ElementRef;
  @ViewChild('nameField') nameField!: ElementRef;
  @ViewChild('mailField') mailField!: ElementRef;
  @ViewChild('textField') textField!: ElementRef;
  @ViewChild('sendButton') sendButton!: ElementRef;
  @ViewChild('infoField') infoField!: ElementRef;
  @ViewChild('nameRequired') nameRequired!: ElementRef;
  @ViewChild('mailRequired') mailRequired!: ElementRef;
  @ViewChild('textRequired') textRequired!: ElementRef;

  http = inject(HttpClient)

  privacyChecked: boolean = false;

  contactData = {
    name: '',
    email: '',
    message: '',
  };

  mailTest = false;

  post = {
    endPoint: 'https:jad-portfolio.de/sendMail.php', // Auf dem Server oder vor dem Hochladen nur /sendMail.php
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  onSubmit(ngForm: any) {
    if (ngForm.submitted && ngForm.form.valid && !this.mailTest) //ab hier könne der haken für die kontrolle rein
    {
      this.http
        .post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => { //Ab hier könnte noch rein, dass eine naricht kommt wenn mail versendet
            ngForm.resetForm();



          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {
      ngForm.resetForm();
      console.log('ohne mail aber abgeschlossen');
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
    else {
      nameRequired.style = 'visibility: hidden;';
    }
    if (!mailField.value) {
      mailRequired.style = 'visibility: visible;';
      isValid = false;
    } else if (!mailField.value.includes('@')) {
      mailRequired.style = 'visibility: visible;';
      isValid = false;
    } else {
      mailRequired.style = 'visibility: hidden;';
    }
    if (!textField.value) {
      textRequired.style = 'visibility: visible;';
      isValid = false;
    }
    else {
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
