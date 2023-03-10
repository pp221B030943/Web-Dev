import { Component, OnInit } from '@angular/core';
import {Album, Photo} from "../models";
import {AlbumService} from "../album.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-album-photos',
  templateUrl: './album-photos.component.html',
  styleUrls: ['./album-photos.component.css']
})
export class AlbumPhotosComponent implements OnInit{
  photos: Photo[] = []

  constructor(private route: ActivatedRoute,
              private albumService: AlbumService) {
    this.photos = [];
  }

  goToLink(link: string){
    window.open(link, "_blank");
  }

  ngOnInit(){

    this.route.paramMap.subscribe((params) => {
      const id = Number(params.get('id'));
      this.albumService.getPhotos(id).subscribe((photos) => {
        this.photos = photos;
      });
    })
  }


}