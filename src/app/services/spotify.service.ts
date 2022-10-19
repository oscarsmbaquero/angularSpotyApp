import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http: HttpClient ) { }

  getNewReleases(){

    const headers = new HttpHeaders({

      'Authorization': ' Bearer BQDnOoGP22YnBuU87JQJyGPBpJdPDTt-P6NvLg79d8WT_A31Xvryq5nQy37zpTn3qFsW_OFQp5bDe_Z-bVCfIjbfDhw9KmvxeW_hWj6O5f3jpsn-1upjv5NxPrrcUrPnZc7idGetvxqthBnCWid5dyhcHKQe1rOrMjH_Wn_KYWhXN8zsIgKjOptTySYmhaI'
    });
     return this.http.get('	https://api.spotify.com/v1/browse/new-releases', { headers});
    

  }

  getArtista( termino:string){
    const headers = new HttpHeaders({

      'Authorization': ' Bearer BQDnOoGP22YnBuU87JQJyGPBpJdPDTt-P6NvLg79d8WT_A31Xvryq5nQy37zpTn3qFsW_OFQp5bDe_Z-bVCfIjbfDhw9KmvxeW_hWj6O5f3jpsn-1upjv5NxPrrcUrPnZc7idGetvxqthBnCWid5dyhcHKQe1rOrMjH_Wn_KYWhXN8zsIgKjOptTySYmhaI'
    });
     return this.http.get(`https://api.spotify.com/v1/search?q=${termino}&type=artist&limit=15`, { headers});
    

  }
}
