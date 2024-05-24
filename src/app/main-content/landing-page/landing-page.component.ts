import { Component, inject } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [TranslateModule, CommonModule],
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss', './responsive-landingpage.scss']
})
export class LandingPageComponent {
  appcomponent = inject(AppComponent)
}
