import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyectos } from 'src/app/model/proyectos.model';
import { ImageProyectoService } from 'src/app/service/image-proyecto.service';
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
    private activatedRouter: ActivatedRoute, public imageProyectoService: ImageProyectoService) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    this.img = this.imageProyectoService.url;
    const proyectos = new Proyectos(this.nombreP, this.descripcionP, this.img);
    if(this.imageProyectoService.url != "")
    this.proyectoS.save(proyectos).subscribe(
      data =>{
        alert("Proyecto añadido correctamente");
        window.location.reload();
      }, err =>{
        alert("falló");
        this.router.navigate(['/proyecto']);
      }
    )
    this.imageProyectoService.clearUrl();
  }

  uploadImage($event:any){
    //const id = this.activatedRouter.snapshot.params['id'];//
    const carpeta = "proyecto"
    this.imageProyectoService.uploadImage($event, carpeta);
  }


}

