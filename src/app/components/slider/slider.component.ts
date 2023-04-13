import { Component } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent {

  index: number = 0;
  arrOfImgs: string[]=["1.png" , "2.png" , "3.png"];
  path: string = 'assets/imgs/' ;
  imgPath: string = this.path + this.arrOfImgs[this.index];
  intervalId: any ;

  previous(){

    this.index--;

    if(this.index >= 0){

      this.imgPath = this.path + this.arrOfImgs[this.index];

    }else{

      this.index = 0;
    }

  }

  next(){

    this.index++;

    if(this.index < this.arrOfImgs.length){

      this.imgPath = this.path + this.arrOfImgs[this.index];

    }else{

      this.index = this.arrOfImgs.length-1;
    }

  }

  slide(){

    this.intervalId = setInterval(()=>{

      this.next();
      console.log(this.index)

      if(this.index == this.arrOfImgs.length-1) this.stop();

      console.log(this.index)

    },1000)
  }

  stop(){

    clearInterval(this.intervalId);
    console.log('hi')
  }
}
