import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderDetailsService } from 'src/app/services/order-details.service';

@Component({
  selector: 'app-artistespage',
  templateUrl: './artistespage.component.html',
  styleUrls: ['./artistespage.component.css']
})
export class ArtistespageComponent implements OnInit {

  constructor(private param:ActivatedRoute,private service:OrderDetailsService) { }
  getArtistesId:any;
  artistesData:any;

  ngOnInit(): void {
    this.getArtistesId = this.param.snapshot.paramMap.get('id');
    console.log(this.getArtistesId,'getartistes');
    if(this.getArtistesId)
    {
      this.artistesData =  this.service.foodDetails.filter((value)=>{
          return value.id == this.getArtistesId;
        });
        console.log(this.artistesData,'artistesdata>>');

    }

  }

}
