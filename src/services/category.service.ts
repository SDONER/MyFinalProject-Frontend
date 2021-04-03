import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/product';
import {ListResponseModel} from 'src/app/models/ListResponseModel'
import { Category } from 'src/app/models/category';


@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  apiUrl = 'https://localhost:44351/api/categories/getall';
  constructor(private httpClient: HttpClient) {}

  getCategories():Observable<ListResponseModel<Category>> {
   return this.httpClient.get<ListResponseModel<Category>>(this.apiUrl);
  }
}

