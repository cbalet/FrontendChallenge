import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable()
export class CalculatorService{

  constructor(private http: HttpClient) {
  }

  getCalculatorResult(shopId: number, amount:number) : Observable<any>{
    let headers = new HttpHeaders();
    headers.append("Authorization", "tokenTest123");
    const options = {
      headers:headers,
      withCredentials: true
    };
    return this.http
      .get('/shop/'+shopId+'/search-combination?amount='+amount,options);
  }
}
