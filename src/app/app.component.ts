import { Component, AfterViewInit, ElementRef, HostListener, OnInit, Renderer2, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/components/header/header.component';
import { MainContentComponent } from './main-content/main-content/main-content.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, MainContentComponent, FooterComponent,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements AfterViewInit {
  title = 'portfolio';
  currentLanguage: string = 'en';


  

  constructor(private el: ElementRef, private renderer: Renderer2, private translate: TranslateService) {
    translate.setDefaultLang('en');
   }

   switchLanguage(language: string) {
    this.currentLanguage = this.currentLanguage === 'en' ? 'de' : 'en';
    this.translate.use(this.currentLanguage);
  }


  isGermanText() {
    return this.translate.instant('getInTouch') === 'Kontaktiere mich'; // Hier den deutschen Text eintragen
  }
  

  private directionMap: { [key: string]: string } = {
    'left': 'slide-in-left',
    'right': 'slide-in-right'
  };

  private slideDirection: string = '';

  ngAfterViewInit(): void {
    this.addIntersectionObserver('.slide-in');
  }

  private addIntersectionObserver(className: string): void {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5
    };

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const direction = entry.target.getAttribute('data-direction');
          if (direction !== null && this.directionMap.hasOwnProperty(direction)) {
            this.slideDirection = this.directionMap[direction];
          } else {
            this.slideDirection = ''; // Fallback auf leeren String, wenn Richtung nicht definiert ist
          }
          this.animateSlideIn(entry.target as HTMLElement);
        } else {
          this.renderer.removeClass(entry.target as HTMLElement, 'active');
        }
      });
    }, options);

    const elements = this.el.nativeElement.querySelectorAll(className);
    elements.forEach((element: Element) => {
      observer.observe(element);
    });
  }

  private animateSlideIn(element: HTMLElement): void {
    this.renderer.addClass(element, 'active');
    this.renderer.addClass(element, this.slideDirection);
  }
}
