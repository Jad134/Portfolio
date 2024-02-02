import { Component, ViewChild, ElementRef, inject } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, ],
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss', './responsive-form.scss']
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
  mailValid: boolean = false;

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
    if (ngForm.submitted && ngForm.form.valid && !this.mailTest && this.mailValid){
      this.http
        .post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => { //Ab hier könnte noch rein, dass eine naricht kommt wenn mail versendet
            ngForm.resetForm();
            this.mailValid = false;
          },
          error: (error) => {
            console.error(error);
            alert('Mail konnte nicht versendet werden.')
          },
          complete: () => alert('Mail wurde versendet') ,
        });
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {
      ngForm.resetForm();
      console.log('ohne mail aber abgeschlossen');
    }
  }


  privacyWarning() {
    let infoField = this.infoField.nativeElement;
    let sendButton = this.sendButton.nativeElement;
    
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


  validateForm() {
    let nameField = this.nameField.nativeElement;
    let mailField = this.mailField.nativeElement;
    let textField = this.textField.nativeElement;
    let textRequired = this.textRequired.nativeElement;
    let mailRequired = this.mailRequired.nativeElement;
    let nameRequired = this.nameRequired.nativeElement;


    if (!nameField.value) {
      nameRequired.style = 'visibility: visible;';
    }
    else { 
      nameRequired.style = 'visibility: hidden;';
    }
    if (!mailField.value) {
      mailRequired.style = 'visibility: visible;';
    } else if (!mailField.value.includes('@')) {
      mailRequired.style = 'visibility: visible;';   
    } else {
      mailRequired.style = 'visibility: hidden;';
      this.mailValid = true;
    }
    if (!textField.value) {
      textRequired.style = 'visibility: visible;';
    }
    else {
      textRequired.style = 'visibility: hidden;';
    }
  }
}
