import { Injectable } from '@angular/core';
import { ApiService }   from './api-service';
import { HttpClient} from '@angular/common/http';
@Injectable()
export class UsersService 
{
constructor(private http:HttpClient,private api:ApiService) { }
load()
{
return this.http.get('http://5b66b70af793e0001456258d.mockapi.io/digitex')
}
}