import { Component } from '@angular/core';
import { BaseService } from '../base.service';
import { ModalComponent } from '../modal/modal.component';
import { ModalService } from '../modal.service';


@Component({
  selector: 'app-rendelesek',
  templateUrl: './rendelesek.component.html',
  styleUrls: ['./rendelesek.component.css']
})
export class RendelesekComponent {
  oszlopok=[
    {key:"id", text:"Azonosító"},
    {key:"Alap", text:"Alap"},
    {key:"Feltet", text:"Feltét"},
    {key:"Szosz", text:"Szósz"},
    {key:"Bonus", text:"Bonus"},
    {key:"Nev", text:"Név"},
    {key:"Cim", text:"Cím"}
  ]
  rendelesek:any;
  rendeles:any={};

  constructor(private base:BaseService, public modalService:ModalService){
    this.refresh();
  }

  refresh(){
    this.base.get().subscribe((adat)=>this.rendelesek=adat)
  }

  delete(body:any){
    this.base.delete(body).subscribe(()=>this.refresh())
  }

  ujRendeles(){
    this.rendeles={};
    this.modalService.open('modal-1');
  }

  closeModal(){
    this.modalService.close();
  }

  modositas(rendeles:any){
    this.rendeles=Object.assign({},rendeles);
    this.modalService.open('modal-1');
  }

  saveModal(){
    if (this.rendeles.id)
      this.base.update(this.rendeles).subscribe( 
        ()=>{ 
              this.closeModal()
              this.refresh()
        }
        )
    else
      this.base.create(this.rendeles).subscribe(  ()=>{ 
        this.closeModal()
        this.refresh()
  })
    
      console.log(this.rendeles)
  }
}
