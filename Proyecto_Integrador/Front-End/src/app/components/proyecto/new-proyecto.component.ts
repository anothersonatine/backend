import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyectos } from 'src/app/model/proyectos.model';
import { ImageService } from 'src/app/service/image.service';
import { ProyectosService } from 'src/app/service/proyectos.service';

@Component({
  selector: 'app-new-proyecto',
  templateUrl: './new-proyecto.component.html',
  styleUrls: ['./new-proyecto.component.css']
})
export class NewProyectoComponent implements OnInit {
  nombreP: string;
  descripcionP: string;
  img: string

  constructor(private proyectoS: ProyectosService, private router: Router,
    private activatedRouter: ActivatedRoute, public imageService: ImageService) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    const proyectos = new Proyectos(this.nombreP, this.descripcionP, this.img);
    this.proyectoS.save(proyectos).subscribe(
      data =>{
        alert("Proyecto añadido correctamente");
        window.location.reload();
      }, err =>{
        alert("falló");
        this.router.navigate(['/proyecto']);
      }
    )
  }

  uploadImage($event:any){
    const id = this.activatedRouter.snapshot.params['id'];
    const name = "proyecto_new_" + id;
    this.imageService.uploadImage($event, name)
  }  
}

