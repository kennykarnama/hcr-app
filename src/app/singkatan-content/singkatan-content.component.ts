import { Component, OnInit,ChangeDetectorRef } from '@angular/core';
import { SingkatanService } from './singkatan.service';
import { Singkatan } from './Singkatan';
import { map } from 'rxjs/operators';
import * as _ from "lodash";

@Component({
  selector: 'app-singkatan-content',
  templateUrl: './singkatan-content.component.html',
  styleUrls: ['./singkatan-content.component.css']
})


export class SingkatanContentComponent implements OnInit {



  isModalVisible: boolean;
  isEditModalVisible: boolean;
  singkatans:Singkatan[];
  respMessage:string;
  selectedSingkatan:Singkatan;

  constructor(private singkatanService:SingkatanService) { 

  }

  ngOnInit() {
  	this.isModalVisible = false;
    this.isEditModalVisible = false;
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
   * Insert new Abbreviation
   * @param {string} abbreviation
   * @param {any}    meaning
   */
  insertSingkatan(abbreviation:string,meaning:any){
    
    const newData:Singkatan = {abbreviation,meaning} as Singkatan;

    this.singkatanService.insertSingkatan(newData).subscribe(
        newData=>{
          this.singkatans.push(newData);
          this.closeModal();
          this.respMessage = "Created!!!";
          setTimeout(function () {
             this.respMessage = null;
          }.bind(this),1000);
        }
      );
    
  }
  /**
   * Delete abbreviation
   * @param {Singkatan} s
   */
  deleteSingkatan(s:Singkatan){
     this.singkatanService.deleteSingkatan(s).subscribe(
       deletedData=>{
         this.singkatans = this.singkatans.filter(function(v:Singkatan){
           return v.abbreviation != s.abbreviation;
         });
         this.respMessage = "Deleted!!!";
         setTimeout(function(){
           this.respMessage = null;
         }.bind(this),1000);
       }
     ); 
  }

  onEnterMeaningUpdate(newMeaning:string,i:number){
    if(newMeaning&&newMeaning!=this.selectedSingkatan.meaning[i]){
      this.selectedSingkatan.meaning[i] = newMeaning;
      this.singkatanService.updateSingkatan(this.selectedSingkatan).subscribe(
            
            updated_singkatan=>{
              //console.log(updated_singkatan);
              
              this.singkatans.forEach(function(v:Singkatan, i, newArray){
                  if(v.abbreviation == updated_singkatan.abbreviation){

                   v = updated_singkatan;
                    
                  }

                  newArray[i] = (v);

              }.bind(this));
           
              this.closeEditModal();
              this.respMessage = "Updated!!!";
              setTimeout(function () {
                this.respMessage = null;

              }.bind(this),1000);
            }
        );
    }
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

  isRespMessageEmpty():boolean{
    return this.respMessage && this.respMessage.length > 0;
  }

  showEditModal(es:Singkatan){
    this.selectedSingkatan = _.cloneDeep(es);
    this.selectedSingkatan.meaning = this.createArray(this.selectedSingkatan.meaning);
    this.isEditModalVisible = true;
  }
  closeEditModal(){
    this.isEditModalVisible = false;
  }

  createArray(data:any):Array<any>{
    if(data instanceof Array){
      return data;
    }
    return [data];
  }

  filterSingularArray(arr:Array<any>){
    if(arr.length == 1){
      console.log(arr);
      return arr[0];
    }
    return arr;
  }

}
