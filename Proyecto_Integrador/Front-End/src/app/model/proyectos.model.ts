export class Proyectos{
  id?: number;
  nombreP: string;
  descripcionP: string;
  img: string;
  link: string

  constructor(nombreP: string, descripcionP: string, img: string, link: string){
      this.nombreP = nombreP;
      this.descripcionP = descripcionP
      this.img = img;
      this.link = link;
  }
}