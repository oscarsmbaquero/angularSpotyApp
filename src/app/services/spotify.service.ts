import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http: HttpClient ) { }

  getNewReleases(){

    const headers = new HttpHeaders({

      'Authorization': ' Bearer BQA_KViwTLAxtxGI8qeXqvoxzWjUcoY1Vg0o-vOb8wIpDZNVJ5cyRiJ_yWFRLloUIPPhxtHa8xDHRYWWYM9LOJFa3q5NiTtEErqu8M-3aPSTn6oCJZwgj2vpMGYOJZSRZ6UT9JnmRLhzMBDdiZqUnWjEj60SzsY-SO6_t-G4GfDPELticu8O3iTAdW3K4Qg'
    });
     return this.http.get('	https://api.spotify.com/v1/browse/new-releases', { headers})
           .pipe(map( (data:any) => {
                return data['albums'].items;
           } ));
    

  }

  getArtista( termino:string){
    const headers = new HttpHeaders({

      'Authorization': ' Bearer BQA_KViwTLAxtxGI8qeXqvoxzWjUcoY1Vg0o-vOb8wIpDZNVJ5cyRiJ_yWFRLloUIPPhxtHa8xDHRYWWYM9LOJFa3q5NiTtEErqu8M-3aPSTn6oCJZwgj2vpMGYOJZSRZ6UT9JnmRLhzMBDdiZqUnWjEj60SzsY-SO6_t-G4GfDPELticu8O3iTAdW3K4Qg'
    });
     return this.http.get(`https://api.spotify.com/v1/search?q=${termino}&type=artist&limit=15`, { headers});
                 

  }
}
