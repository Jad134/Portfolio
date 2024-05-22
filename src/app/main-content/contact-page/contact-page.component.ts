import { Component, ViewChild, ElementRef, Input } from '@angular/core';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { send } from 'process';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { TranslateModule } from '@ngx-translate/core';


@Component({
  selector: 'app-contact-page',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, ContactFormComponent, TranslateModule],
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss','./responsive-contact.scss']
})


export class ContactPageComponent {
  @ViewChild('mailSucces') mailSucces!: ElementRef;

}
