import { Component } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Portfolio';

  menuOpen = false;
  menuOpen_projects = false;

  constructor(private router: Router) { }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
  closeMenu() {
    this.menuOpen = false;
  }
  toggleProjects(event: Event) {
    if (window.innerWidth < 768) {
      event.preventDefault();
      this.menuOpen_projects = !this.menuOpen_projects;
    }
  }
  
  closeProjects() {
    this.menuOpen_projects = false;
  }

  isProjectSubpageActive(): boolean {
    return this.router.url.startsWith('/projects/');
  }
}
