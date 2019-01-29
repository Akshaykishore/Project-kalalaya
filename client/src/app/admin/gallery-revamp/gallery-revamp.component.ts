import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-gallery-revamp',
  templateUrl: './gallery-revamp.component.html',
  styleUrls: ['./gallery-revamp.component.css']
})
export class GalleryRevampComponent implements OnInit {

  constructor(private adminService: AdminService) { }

  ngOnInit() {
  }
  uploadFile(event) {
    let fileName = event.target.files[0].name;

    // Send filename Service
    this.adminService.sendFileName(fileName).subscribe(
      data => {
        
      })
  }
}
