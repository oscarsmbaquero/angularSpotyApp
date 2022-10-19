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

      'Authorization': ' Bearer BQDQ6f_E7K68K-DuWAFQ67odkasABOrumqNm4cdVJ7C3ZtqgMfuoIPYiiNsZgGZ-Ay8MwtHOnXc4kk2psCQi0c3tJdfoWZ2yLwM6TIt0Z-komSEd4F1gs_DrW3HsbW5tNJ3zIw0x7to7P4KZfQF9aaZ_ixBVzixLrcMdV17YR3yZk8oSFrH3GdtYN8tO6yI'
    });
     return this.http.get('	https://api.spotify.com/v1/browse/new-releases', { headers})
           .pipe(map( (data:any) => {
                return data['albums'].items;
           } ));
    

  }

  getArtista( termino:string){
    const headers = new HttpHeaders({

      'Authorization': ' Bearer BQDQ6f_E7K68K-DuWAFQ67odkasABOrumqNm4cdVJ7C3ZtqgMfuoIPYiiNsZgGZ-Ay8MwtHOnXc4kk2psCQi0c3tJdfoWZ2yLwM6TIt0Z-komSEd4F1gs_DrW3HsbW5tNJ3zIw0x7to7P4KZfQF9aaZ_ixBVzixLrcMdV17YR3yZk8oSFrH3GdtYN8tO6yI'
    });
     return this.http.get(`https://api.spotify.com/v1/search?q=${termino}&type=artist&limit=15`, { headers});
                 

  }
}
