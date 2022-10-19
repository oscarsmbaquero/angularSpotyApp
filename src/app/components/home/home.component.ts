import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  nuevosTemas: any [] = [];

  constructor( private spotify: SpotifyService ) { 
    this.spotify.getNewReleases()
    .subscribe( (data: any )=>{
      console.log(data.albums.items[0].artists[0].name)
       this.nuevosTemas = data.albums.items
    })
    
   }

  ngOnInit(): void {
  }

}
