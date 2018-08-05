import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable()
export class ApiService {
constructor(private router: Router) { }
baseUrl='http://5b66b70af793e0001456258d.mockapi.io/digitex';

}