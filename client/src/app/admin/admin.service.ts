import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AdminService {

  // Host where the server code runs
  readonly baseURL = 'http://localhost:4600';

  // Additions options for http
  httpOptions: any = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private http: HttpClient) {
  }

  // Send the fileName 
  sendFileName(fileName) {
    return this.http.post(this.baseURL + "/upload/imageUpload", fileName, this.httpOptions);
  }

  // Post the Student Details 
  storeStudentDetails(details){
    return this.http.post(this.baseURL + "/admin/addStudent", details, this.httpOptions);
    
  }

}
