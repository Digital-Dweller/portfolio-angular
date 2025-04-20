import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { PlannerappComponent } from './pages/projects/plannerapp/plannerapp.component';
import { InventorywinappComponent } from './pages/projects/inventorywinapp/inventorywinapp.component';
import { RecipekeeperComponent } from './pages/projects/recipekeeper/recipekeeper.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  {
    path: 'projects',
    component: ProjectsComponent,
    children: [
      { path: 'inventorywinapp', component: InventorywinappComponent },
      { path: 'plannerapp', component: PlannerappComponent },
      { path: 'recipekeeper', component: RecipekeeperComponent}
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
