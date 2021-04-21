import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AttendenceOutService {

  baseUrl = environment.appRoot;
  constructor(private http : HttpClient) { }

  attendenceOut(params : any):Observable <any>{
    return this.http.post(this.baseUrl + '/attendance_out.php', params)
  }
}
