import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { ToolBarComponent } from './tool-bar/tool-bar.component';

const routes: Routes = [
  {
    path: 'toolbar', component: ToolBarComponent
  },
  {
    path: 'profile', component: ProfileComponent, pathMatch: "full"
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
