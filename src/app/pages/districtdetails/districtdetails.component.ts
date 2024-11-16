import { Component } from '@angular/core';
import { ApiService } from '../../api.service';
import { ActivatedRoute } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-districtdetails',
  standalone: true,
  imports: [NgIf],
  templateUrl: './districtdetails.component.html',
  styleUrl: './districtdetails.component.scss'
})
export class DistrictdetailsComponent {

district:any
  constructor(private activted_route:ActivatedRoute,public api:ApiService) {}

  ngOnInit() {
  let id = this.activted_route.snapshot.paramMap.get('id');
  console.log(id)

  if (id) {
    this.api.getDistricts(id).subscribe((data: any) => {
      this.district = data[0]; 
      console.log(this.district, 'District Details');
    });
  }

}
}
