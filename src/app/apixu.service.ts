import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApixuService {

  constructor(private http: HttpClient) { }
  getWeather(location){
    return this.http.get(
        'http://api.weatherstack.com/current?access_key=543b708872ad3dfeb02aa46ee845b9be&query='+location
    );
}
}
//http://api.weatherstack.com/current//
    //? access_key = YOUR_ACCESS_KEY//
    //& query = New York//