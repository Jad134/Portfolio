import { Component, ViewChild, ElementRef } from '@angular/core';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { send } from 'process';
import { ContactFormComponent } from './contact-form/contact-form.component';


@Component({
  selector: 'app-contact-page',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, ContactFormComponent],
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
}
