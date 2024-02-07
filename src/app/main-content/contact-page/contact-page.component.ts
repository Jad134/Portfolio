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
  styleUrls: ['./contact-page.component.scss','./responsive-contact.scss']
})
export class ContactPageComponent {
  
}
