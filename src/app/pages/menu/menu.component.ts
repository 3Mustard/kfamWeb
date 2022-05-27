import { Component, OnInit } from '@angular/core';
import { PanelsService } from 'src/app/components/panels.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {

  constructor(private service:PanelsService) { }
  itemData:any;
  ngOnInit(): void {
    this.itemData = this.service.panelDetails;
  }
  
}