import { Component } from '@angular/core';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css'],
  host: {'(window:keydown)': 'hotkeys($event)'}
})
export class ExampleComponent {

  constructor() { }

  private selectedImage: String[];
  private urlSmallImage: String = "assets/images/small/";
  private urlLargeImage: String = "assets/images/large/";
  private datasource: String[][] = [
    [this.urlSmallImage + '1s.jpg', this.urlLargeImage + '1.jpg'],
    [this.urlSmallImage + '2s.jpg', this.urlLargeImage + '2.jpg'],
    [this.urlSmallImage + '5s.jpg', this.urlLargeImage + '5.jpg'],
    [this.urlSmallImage + '6s.jpg', this.urlLargeImage + '6.jpg'],
    [this.urlSmallImage + '8s.jpg', this.urlLargeImage + '8.jpg'],
    [this.urlSmallImage + '9s.jpg', this.urlLargeImage + '9.jpg']
];

  setSelectedImage(image){
     this.selectedImage = image;	
  }

  navigate(forward){
    var index = this.datasource.indexOf(this.selectedImage)+(forward ? 1: -1);
    if(index >= 0 && index < this.datasource.length){
       this.selectedImage = this.datasource[index];	
    }
  }
}
