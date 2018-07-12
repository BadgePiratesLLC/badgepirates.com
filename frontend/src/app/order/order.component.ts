import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.less'],
})
export class OrderComponent implements OnInit {

  public badgeCount:any = "1"
  public badgeDisplayTotal:any = "5"

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
  }

  updateBadgeCount(data) {
    this.badgeCount = data
    this.badgeDisplayTotal = data * 5
  }

  openCheckout() {
    var handler = (<any>window).StripeCheckout.configure({
      key: 'pk_live_V9gLHpvtUlp4XdWjcJ8hJB9v',
      locale: 'auto',
      token: (token: any) => {
        // You can access the token ID with `token.id`.
        // Get the token ID to your server-side code for use.
        this.sendPost(token).subscribe(
          response => console.log(response),
          err => console.log(err)
        );
      }
    });

    handler.open({
      name: 'BadgePirates LLC',
      description: 'SecKC Defcon 26 VIP Party SAO',
      amount: this.badgeCount * 500,
      "billing-address": true,
      "zip-code": true,
      locale: "auto",
      image: "https://stripe.com/img/documentation/checkout/BPSkull.png"
    });

  }

  sendPost(token) {
    token.badgeCount = this.badgeCount;
    let body = JSON.stringify(token);
    return this.http.post('https://api.badgepirates.com/api/order', body, httpOptions);
  }
}
