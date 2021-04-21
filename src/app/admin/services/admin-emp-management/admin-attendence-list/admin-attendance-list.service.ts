import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdminAttendanceListService {

  baseUrl = environment.appRoot;
  constructor(private http:HttpClient) { }

  empAttendenceList():Observable <any>{
    return this.http.get(this.baseUrl + '/admin_attendance_list.php')
  }


  
  
}
