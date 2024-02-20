import { Component, inject,  } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { AppComponent } from '../../app.component';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [TranslateModule, AppComponent, CommonModule ],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss','./responsive-skills.scss']
})
export class SkillsComponent {
  
  appComponent = inject(AppComponent)

}
