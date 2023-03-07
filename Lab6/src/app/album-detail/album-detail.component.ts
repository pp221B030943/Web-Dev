import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Album} from "../models";
import {AlbumService} from "../album.service";

@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css']
})
export class AlbumDetailComponent implements OnInit{
  album: Album;

  constructor(private route: ActivatedRoute,
              private albumService: AlbumService) {
    this.album = {} as Album;
  }

  ngOnInit(): void {
    // const id = Number(this.route.snapshot.paramMap.get('id'));
    // if(id){
    //   let num_id = +id;
    // }
    this.route.paramMap.subscribe((params) => {
      const id = Number(params.get('id'));
      this.albumService.getAlbum(id).subscribe((album) => {
        this.album = album;
      });
    })

  }
}