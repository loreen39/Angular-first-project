import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Products, PaginationParams} from '../../types';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor( private apiService : ApiService ){}

  getProducts = (url:string, params:PaginationParams): Observable<Products> => {
    return this.apiService.get(url, {
      params,
      responseType: 'json',
    });
  }

  addProduct = (url:string, body:any): Observable<any> => {
    return this.apiService.post(url, body, {});
  }

  editProduct = (url:string, body:any): Observable<any> => {
    return this.apiService.put(url, body, {});
  }

  deletProduct = (url:string): Observable<any> => {
    return this.apiService.delete(url, {});
  }
}
