import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable()
export class CalculatorService{

  constructor(private http: HttpClient) {
  }

  /**
   * Call calculator result
   * @param {number} shopId
   * @param {number} amount
   * @returns {Observable<any>} equal / floor / ceil values
   */
  getCalculatorResult(shopId: number, amount:number) : Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'tokenTest123'
      })
    };
    return this.http
      .get('/shop/'+shopId+'/search-combination?amount='+amount,httpOptions);
  }
}
