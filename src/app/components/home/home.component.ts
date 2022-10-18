import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  paises: any[] = [];

  constructor( private http: HttpClient ) { 
    this.http.get('https://restcountries.com/v2/lang/es')
        .subscribe (( response: any) =>{
          this.paises = response;
          console.log(response);
        })
   }

  ngOnInit(): void {
  }

}