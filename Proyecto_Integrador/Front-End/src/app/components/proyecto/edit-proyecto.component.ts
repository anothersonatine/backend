import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyectos } from 'src/app/model/proyectos.model';
import { ImageService } from 'src/app/service/image.service';
import { ProyectosService } from 'src/app/service/proyectos.service';

@Component({
  selector: 'app-edit-proyecto',
  templateUrl: './edit-proyecto.component.html',
  styleUrls: ['./edit-proyecto.component.css']
})
export class EditProyectoComponent implements OnInit {
  proyectos: Proyectos = null;

  constructor(private proyectoS: ProyectosService,
   private router: Router,public imageService: ImageService, 
   private activatedRouter: ActivatedRoute,) 
    { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.proyectoS.detail(id).subscribe(
      data =>{
        this.proyectos = data;
      }, err =>{
         alert("Error al modificar");
         this.router.navigate(['/acerca-de']);
      }
    )
  }
  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.proyectos.img = this.imageService.url;
    this.proyectoS.update(id, this.proyectos).subscribe(
      data => {
        this.router.navigate(['/proyecto']);
      }, err => {
        alert("Error al modificar");
        this.router.navigate(['/proyectos']);
      }
    )
  }


  uploadImage($event:any){
    const id = this.activatedRouter.snapshot.params['id'];
    const name = "proyecto_edit" + id;
    this.imageService.uploadImage($event, name)
  }  
}