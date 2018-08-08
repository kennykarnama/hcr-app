import { Component, OnInit,ChangeDetectorRef } from '@angular/core';
import { SingkatanService } from './singkatan.service';
import { Singkatan } from './Singkatan';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-singkatan-content',
  templateUrl: './singkatan-content.component.html',
  styleUrls: ['./singkatan-content.component.css']
})
export class SingkatanContentComponent implements OnInit {

  isModalVisible: boolean;
  singkatans:Singkatan[];

  constructor(private singkatanService:SingkatanService) { 

  }

  ngOnInit() {
  	this.isModalVisible = false;
    this.listSingkatan();
  }
  /**
   * List singkatan
   */
  listSingkatan(){
    this.singkatanService.listSingkatan()
    .subscribe(
        list_singkatan=>{

          this.singkatans = list_singkatan;

          console.log(this.singkatans);

        }
     );
  }
  /**
   * Check if a var is
   * array
   * @param  {any}     t
   * @return {boolean}
   */
  isArray(t:any):boolean{
    return t instanceof Array;
  }

  showModal(){
  	this.isModalVisible = !this.isModalVisible;
  }

  closeModal(){
  	this.isModalVisible = false;
  }

}
