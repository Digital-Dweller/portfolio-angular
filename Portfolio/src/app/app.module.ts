import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { PlannerappComponent } from './pages/projects/plannerapp/plannerapp.component';
import { RecipekeeperComponent } from './pages/projects/recipekeeper/recipekeeper.component';
import { InventorywinappComponent } from './pages/projects/inventorywinapp/inventorywinapp.component';
import { ImageViewerComponent } from './image-viewer/image-viewer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    ProjectsComponent,
    PlannerappComponent,
    RecipekeeperComponent,
    InventorywinappComponent,
    ImageViewerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
