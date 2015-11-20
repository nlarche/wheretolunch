export class Place {
  
  static STARTED:string = "started";
  static COMPLETED:string = "completed"  
  
  name : string;
  place: string;
  status:string = Place.STARTED;  
  
  constructor(name: string="", place: string=""){
    this.name = name;
    this.place = place;
  }
  
  toggle():void{
    if (this.status === Place.STARTED){
      this.status = Place.COMPLETED;
    }else {
      this.status = Place.STARTED;
    }
  }
}