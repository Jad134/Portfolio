import { Component, Input } from '@angular/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss','./responsive-project.scss']
})


export class ProjectsComponent {


  projects = [
    {
      imageUrl: 'assets/img/projects/join.png',
      projectName: 'Join',
      languages: 'JavaScript | HTML | CSS',
      projectDescription: 'A simple Jump-and-Run game based on an object-oriented approach. Help El-Pollo-Loco to find coins and poison bottles to fight against the killer chicken.',
      githubLink: 'https://github.com/Jad134/Join',
      projectLink: 'http://jad-el-nader.developerakademie.net/Join/index.html'
    },
    {
      imageUrl: 'assets/img/projects/pollo-loco.png',
      projectName: 'El-Pollo-Loco',
      languages: 'JavaScript | HTML | CSS',
      projectDescription: 'A simple Jump-and-Run game based on an object-oriented approach. Help El-Pollo-Loco to find coins and poison bottles to fight against the killer chicken.',
      githubLink: 'https://github.com/Jad134/EL-Pollo-Loco',
      projectLink: 'http://jad-el-nader.developerakademie.net/Pollo%20Loco/index.html'
    },
    {
      imageUrl: 'assets/img/projects/pokedex.png',
      projectName: 'Pokedex',
      languages: 'API | JavaScript | HTML | CSS',
      projectDescription: 'Description of another project.',
      githubLink: 'https://github.com/Jad134/PokeDex',
      projectLink: 'http://jad-el-nader.developerakademie.net/JS/Pokedex/index.html'
    },
    {
      imageUrl: 'assets/img/projects/pokedex.png',
      projectName: 'Pokedex',
      languages: 'API | JavaScript | HTML | CSS',
      projectDescription: 'Description of another project.',
      githubLink: 'https://github.com/Jad134/Join',
      projectLink: 'http://jad-el-nader.developerakademie.net/Join/index.html'
    },
  ];

  
  isEven(index: number): boolean {
    return index % 2 === 0;
  }
}

