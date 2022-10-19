import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http: HttpClient ) { }

  getNewReleases(){

    const headers = new HttpHeaders({

      'Authorization': ' Bearer BQC5rICQheubhB6H_dsuhKiCvYH6PHNSQ-R1VRRLaabnX3AFvKL_rGFFzggCyNi9HCf7warC7deTsihwpQ2QybN4InQhB1Ka25f3dZRl7C0Wg_jq3YZ08Bzy3tZLV_kUZgCX8ZWYJ6-u8N7Q5tc6ycfGHZtZge9EYEoUJBjo1Gb6kb0wbSur1D2Gfe1UMLY'
    });
    this.http.get('	https://api.spotify.com/v1/browse/new-releases', { headers})
    .subscribe ( data => {
      console.log(data);
      
    })

  }
}
