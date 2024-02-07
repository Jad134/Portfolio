import { Component, ViewChild, ElementRef, inject, HostListener } from '@angular/core';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss', './responsive-form.scss']
})


export class ContactFormComponent {
  @ViewChild('contactForm') contactForm!: NgForm;
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
  mailTest = false;


  contactData = {
    name: '',
    email: '',
    message: '',
  };


@HostListener('document:keydown.enter', ['$event'])
  handleEnterPress(event: KeyboardEvent) {
    event.preventDefault(); 
    this.onEnterPress();
  }


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
    if (ngForm.submitted && ngForm.form.valid && !this.mailTest && this.mailValid) {
      this.http
        .post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => { 
            ngForm.resetForm();
            this.mailValid = false;
          },
          error: (error) => {
            console.error(error);
            alert('Mail konnte nicht versendet werden.')
          },
          complete: () => alert('Mail wurde versendet'),
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


 validateName(name: string): boolean {
  return !!name; 
}


validateEmail(email: string): boolean {
  return !!email && email.includes('@'); 
}


validateMessage(message: string): boolean {
  return !!message; 
}


showErrorMessage(element: ElementRef, show: boolean): void {
  element.nativeElement.style.visibility = show ? 'visible' : 'hidden'; 
}


validateForm() {
  const nameValid = this.validateName(this.contactData.name);
  const emailValid = this.validateEmail(this.contactData.email);
  const messageValid = this.validateMessage(this.contactData.message);

  this.showErrorMessage(this.nameRequired, !nameValid);
  this.showErrorMessage(this.mailRequired, !emailValid);
  this.showErrorMessage(this.textRequired, !messageValid);

  this.mailValid = emailValid; 
}


  onEnterPress() {
    this.privacyWarning()
    this.validateForm()
    if (this.contactForm.valid) { 
      this.contactForm.onSubmit(new Event('submit')); 
    }
  }
}
