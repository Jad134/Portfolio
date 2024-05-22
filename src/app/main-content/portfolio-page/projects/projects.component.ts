import { Component, Input } from '@angular/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ CommonModule, TranslateModule, ],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss','./responsive-project.scss']
})


export class ProjectsComponent {
  constructor(private translate: TranslateService) {}


  getProjectDescription(translationKey: string) {
    return this.translate.instant(translationKey);
  }


  projects = [
    {
      imageUrl: 'assets/img/projects/join.png',
      projectName: 'Join',
      languages: 'JavaScript | HTML | CSS',
      projectDescription: 'joinDescription',
      githubLink: 'https://github.com/Jad134/Join',
      projectLink: 'http://jad-el-nader.developerakademie.net/Join/index.html'
    },
    {
      imageUrl: 'assets/img/projects/pollo-loco.png',
      projectName: 'El-Pollo-Loco',
      languages: 'JavaScript | HTML | CSS',
      projectDescription: 'polloLocoDecscription',
      githubLink: 'https://github.com/Jad134/EL-Pollo-Loco',
      projectLink: 'http://jad-el-nader.developerakademie.net/Pollo%20Loco/index.html'
    },
    {
      imageUrl: 'assets/img/projects/dabubble.png',
      projectName: 'DABubble',
      languages: 'Angular | TypeScript | Firebase |  HTML | SCSS |',
      projectDescription: 'daBubbleDescription',
      githubLink: 'https://github.com/Jad134/dabubble',
      projectLink: 'https://jad-portfolio.de/DaBubble/'
    },
    {
      imageUrl: 'assets/img/projects/pokedex.png',
      projectName: 'Pokedex',
      languages: 'API | JavaScript | HTML | CSS',
      projectDescription: 'pokedexDescription',
      githubLink: 'https://github.com/Jad134/PokeDex',
      projectLink: 'http://jad-el-nader.developerakademie.net/JS/Pokedex/index.html'
    },
  ];


  isEven(index: number): boolean {
    return index % 2 === 0;
  }
}

