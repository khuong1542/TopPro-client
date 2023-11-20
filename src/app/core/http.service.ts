import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "src/environments/environment";

@Injectable()

export class HttpService {
    baseUrl: any;
    headers: any;

    constructor(private http: HttpClient) {
        this.baseUrl = environment.API_URL;
    }

    getHeader() {
        let token = localStorage.getItem('token');
        let headers = new HttpHeaders()
            .set('content-type', 'application/json')
            .set('Accept', 'application/json')
            .set('Authorization', `Bearer ${token}`)
            .set('Access-Control-Allow-Headers', 'Content-Type, X-XSRF-TOKEN');
        return this.headers = headers;
    }

    getMethods(apiUrl: any, params: any) {
        let url = this.baseUrl + apiUrl;
        let options = { params: params, headers: this.headers }
        return this.http.get<any>(url, options)
            .pipe(data => {
                return data;
            })
    }
    postMethods(apiUrl: any, params: any) {
        let url = this.baseUrl + apiUrl;
        let headers = { headers: this.getHeader() };
        return this.http.post<any>(url, params, headers)
            .pipe(data => {
                return data;
            });
    }
    putMethods(apiUrl: any, params: any) {
        let url = this.baseUrl + apiUrl;
        let headers = { headers: this.getHeader() };
        return this.http.put<any>(url, params, headers)
            .pipe(data => {
                return data;
            });
    }
    deleteMethods(apiUrl: any, id: string) {
        let url = this.baseUrl + apiUrl + '/' + id;
        let headers = { headers: this.getHeader() };
        return this.http.delete<any>(url, headers)
            .pipe(data => {
                return data;
            });
    }
}