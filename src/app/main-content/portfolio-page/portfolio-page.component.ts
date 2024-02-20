import { Component } from '@angular/core';
import { ProjectsComponent } from './projects/projects.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-portfolio-page',
  standalone: true,
  imports: [ProjectsComponent, TranslateModule],
  templateUrl: './portfolio-page.component.html',
  styleUrls: ['./portfolio-page.component.scss','./responsive-Portfolio.scss']
})
export class PortfolioPageComponent {

}
