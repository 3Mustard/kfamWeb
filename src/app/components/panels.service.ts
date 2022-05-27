import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PanelsService {

  constructor() { }

  panelDetails = [
    {
      id:1,
      name: "photo1",
      details: "Details about tickets sold?",
      details2: "something else",
      image: "../../../assets/images/dinner1.jpg"
      // ../../../assets/images/dinner1.jpg
    },
    {
      id:2,
      name: "photo2",
      details: "Details about tickets sold?",
      details2: "something else",
      image: "../../../assets/images/dinner2.jpg"
    },
    {
      id:3,
      name: "photo3",
      details: "Details about tickets sold?",
      details2: "something else",
      image: "../../../assets/images/dinner3.jpg"
    },
    {
      id:4,
      name: "photo4",
      details: "Details about tickets sold?",
      details2: "something else",
      image: "../../../assets/images/dinner4.jpg"
    }
  ]
}
