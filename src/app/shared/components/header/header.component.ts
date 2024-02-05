import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss', './responsive-header.scss']
})
export class HeaderComponent {
  isDropdownOpen: boolean = false;
  iconState: number = 0;

  
  getIconSrc(): string {
    switch (this.iconState) {
      case 1:
        return 'assets/img/icons/x.png';
      case 2:
        return 'assets/img/icons/burger_menu_transition1.png';
      case 3:
        return 'assets/img/icons/burger_menu_transition2.png';
      default:
        return 'assets/img/icons/burger_menu.png';
    }
  }


  toggleDropdown(): void {
    this.isDropdownOpen = !this.isDropdownOpen;
    this.preventScrolling()

    setTimeout(() => {
      this.iconState = this.isDropdownOpen ? 2 : 3;
    }, 100);

    setTimeout(() => {
      this.iconState = this.isDropdownOpen ? 3 : 2;
    }, 200);

    setTimeout(() => {
      this.iconState = this.isDropdownOpen ? 1 : 0;
    }, 300);
  }


  preventScrolling() {
    if (this.isDropdownOpen) {
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.documentElement.style.overflow = 'auto';
    }
  }
}

