import { Component, OnInit,ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-singkatan-content',
  templateUrl: './singkatan-content.component.html',
  styleUrls: ['./singkatan-content.component.css']
})
export class SingkatanContentComponent implements OnInit {

  isModalVisible: boolean;

  constructor() { 

  }

  ngOnInit() {
  	this.isModalVisible = false;
  }

  showModal(){
  	this.isModalVisible = !this.isModalVisible;
  }

  closeModal(){
  	this.isModalVisible = false;
  }

}
