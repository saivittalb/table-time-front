import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Environment } from '../environments/environments';


@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor() { }

  private getData() {
    //To do for collecting data when the backend is ready
  }
}