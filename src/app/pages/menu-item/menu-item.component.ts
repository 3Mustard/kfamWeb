import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PanelsService } from 'src/app/components/panels.service';


@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent implements OnInit {

  constructor(private param:ActivatedRoute,private service:PanelsService) { }
  getItemId:any;
  itemData:any;
  ngOnInit(): void {
    this.getItemId = this.param.snapshot.paramMap.get('id');
    console.log(this.getItemId, 'ItemId');
    
    if (this.getItemId)
    {
      this.itemData = this.service.panelDetails.filter((value)=>{
        return value.id == this.getItemId
      });
    }

  }

}
