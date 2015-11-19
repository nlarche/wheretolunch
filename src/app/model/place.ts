export class Place {
  
  static STARTED:string = "started";
  static COMPLETED:string = "completed"  
  
  name : string;
  status:string = Place.STARTED;  
  
  constructor(name: string=""){
    this.name = name;
  }
  
  toggle():void{
    if (this.status === Place.STARTED){
      this.status = Place.COMPLETED;
    }else {
      this.status = Place.STARTED;
    }
  }
}