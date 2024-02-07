import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss', './responsive-footer.scss']
})


export class FooterComponent {
  @ViewChild('scrollContainer', { read: ElementRef }) scrollContainer!: ElementRef<HTMLElement>;


  scrollToTop(): void {
    if (document.documentElement) {
      document.documentElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
