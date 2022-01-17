import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ChartsApiService {

  info_url: string = 'https://api.whatsonchain.com/v1/bsv/main/chain/info';
  blockbyheight_url: string = 'https://api.whatsonchain.com/v1/bsv/<network>/block/height/';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  data: any;

  block_height: any;
  block_value: any;
  txn_value: any;

  counterArray: any;

  constructor(private http: HttpClient) { }

  // createEmployee(employee: any): Observable<any> {
  //   return this.httpClient.post(this.employee_api_url + '/create', employee)
  //     .pipe(map((resp: any) => resp.json()),
  //       catchError(error => this.throwError(error))
  //     )

  // }
  // getEmployees(): Observable<any> {
  //   return this.httpClient.get(this.employee_api_url + '/read')
  //     .pipe(map((resp: any) => resp.json()),
  //       catchError(error => this.throwError(error))
  //     )

  // }

  getChainData() {
    this.data = this.http.get(this.info_url);
    console.log(this.data);
    return this.http.get(this.info_url);
  }

  getBlockHeightData(){

  }

  getTxnValueData(){

    this.data = this.http.get(this.info_url);
    this.block_height = this.data.blocks;

    console.log(this.data)
    return this.data;

    // for(let i=this.block_height;i=this.block_height-2;i--){
    //   // this.data = this.http.get(this.blockbyheight_url + this.block_height);
    //   this.counterArray.push(i);
    // }

    // for(let i=0;i<this.counterArray.length;i++){
    //   this.data = this.http.get(this.blockbyheight_url + this.counterArray[i]);
    //   this.block_value = this.data.vout[0].value;
    //   this.txn_value += this.block_value;
    // }

    // console.log(this.txn_value);
    // return this.txn_value;

  }

  getTxnVolumeData(){

  }

  getBlockSizeData(){

  }
 
  getTotalFeeData(){
    

  }

}
