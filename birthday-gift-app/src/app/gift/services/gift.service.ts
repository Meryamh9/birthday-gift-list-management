import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Gift } from '../models/gift';
import { environment } from 'src/environments/environments.development';

@Injectable({
  providedIn: 'root'
})
export class GiftService {

  constructor(private http: HttpClient) { }

  get() : Observable<Gift[]>{
    return this.http.get<Gift[]>(environment.giftApiBaseUrl+"/gift");
  }

  create(gift: any): Observable<string>{
    return this.http.post<string>(environment.giftApiBaseUrl+"/gift",gift);
  }

  update(gift: Gift): Observable<string>{
    return this.http.put<string>(environment.giftApiBaseUrl+"/gift/"+gift.id, gift);
  }

  delete(id: number): Observable<string>{
    return this.http.delete<string>(environment.giftApiBaseUrl+"/gift/"+id);
  }
}
