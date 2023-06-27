import { Component,OnInit } from '@angular/core';
import doct from "doc.json";
interface docts{
  name:string;
  studies:string;
  experience:string;
  specialist:string;
  availibility:string;
  timing:string;
  name1:string;
  studies1:string;
  experience1:string;
  specialist1:string;
  availibility1:string;
  timing1:string;
  name2:string;
  studies2:string;
  experience2:string;
  specialist2:string;
  availibility2:string;
  timing2:string;
  name3:string;
  studies3:string;
  experience3:string;
  specialist3:string;
  availibility3:string;
  timing3:string;
    name4:string;
  studies4:string;
  experience4:string;
  specialist4:string;
  availibility4:string;
  timing4:string
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
constructor() {
  }


  ngOnInit(): void {}
    title = 'searchbar';
  pic1:string="assets/docfe.jpeg";
  pic2:string="assets/doctor.jpeg";
  pic3:string="assets/thethoscope.jpeg";
    doctor:docts[]=doct;
  }
