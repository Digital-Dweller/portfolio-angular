import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
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
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ImageViewerLandscapeComponent } from './image-viewer-landscape/image-viewer-landscape.component';
import { provideHttpClient } from '@angular/common/http';
import { AIAssistantComponent } from './ai-assistant/ai-assistant.component';


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
    ImageViewerComponent,
    ContactFormComponent,
    ImageViewerLandscapeComponent,
    AIAssistantComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    provideHttpClient()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
