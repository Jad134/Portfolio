import { Component, Input } from '@angular/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  projects = [
    {
      imageUrl: 'assets/img/projects/join.png',
      projectName: 'Join',
      languages: 'JavaScript | HTML | CSS',
      projectDescription: 'A simple Jump-and-Run game based on an object-oriented approach. Help El-Pollo-Loco to find coins and poison bottles to fight against the killer chicken.'
    },
    {
      imageUrl: 'assets/img/projects/pollo-loco.png',
      projectName: 'El-Pollo-Loco',
      languages: 'JavaScript | HTML | CSS',
      projectDescription: 'A simple Jump-and-Run game based on an object-oriented approach. Help El-Pollo-Loco to find coins and poison bottles to fight against the killer chicken.'
    },
    {
      imageUrl: 'assets/img/projects/pokedex.png',
      projectName: 'Pokedex',
      languages: 'API | JavaScript | HTML | CSS',
      projectDescription: 'Description of another project.'
    },
    {
      imageUrl: 'assets/img/projects/pokedex.png',
      projectName: 'Pokedex',
      languages: 'API | JavaScript | HTML | CSS',
      projectDescription: 'Description of another project.'
    },
  ];
  isEven(index: number): boolean {
    return index % 2 === 0;
  }
}

