import { Component, OnInit } from '@angular/core';
import { HomeContentService } from './home-content.service';
import { About } from './About';

@Component({
  selector: 'app-home-content',
  templateUrl: './home-content.component.html',
  styleUrls: ['./home-content.component.css']
})
export class HomeContentComponent implements OnInit {

  constructor(private homeContentService: HomeContentService) { }

  private about;
  ngOnInit() {
  	this.getAbout();
  }
  /**
   * Get about
   */
  getAbout(){
  	this.homeContentService.getAbout().subscribe(
  		about=>{
  			this.about = about;
  			console.log(about);
  		}
  	);
  }

}
