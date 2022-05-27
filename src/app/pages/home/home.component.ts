import { Component, OnInit } from '@angular/core';
import { PanelsService } from 'src/app/components/panels.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  constructor(private service:PanelsService) { }
  itemData:any;

  ngOnInit(): void {
    this.itemData = this.service.panelDetails;
  }

}
