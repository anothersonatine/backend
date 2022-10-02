import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';
import { BannerComponent } from './components/banner/banner.component';
import { EditeducacionComponent } from './components/educacion/editeducacion.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { NeweducacionComponent } from './components/educacion/neweducacion.component';
import { EditExperienciaComponent } from './components/experiencia/edit-experiencia.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { NewExperienciaComponent } from './components/experiencia/new-experiencia.component';
import { EditSkillComponent } from './components/h-s-skills/edit-skill.component';
import { HSSkillsComponent } from './components/h-s-skills/h-s-skills.component';
import { NewSkillComponent } from './components/h-s-skills/new-skill.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ProyectoComponent } from './components/proyecto/proyecto.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'login', component: LoginComponent},
  {path: 'nuevaexp', component: NewExperienciaComponent},
  {path: 'editexp/:id', component: EditExperienciaComponent},
  { path: 'nuevaedu', component: NeweducacionComponent},
  { path: 'editedu/:id', component: EditeducacionComponent},
  { path: 'newskill', component: NewSkillComponent},
  { path: 'editskill/:id', component: EditSkillComponent},
  { path: 'banner', component: BannerComponent},
  { path: 'acerca-de', component: AcercaDeComponent},
  { path: 'educacion', component: EducacionComponent},
  { path: 'experiencia', component: ExperienciaComponent},
  { path: 'h-s-skills', component: HSSkillsComponent},
  { path: 'proyecto', component: ProyectoComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
