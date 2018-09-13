import { Component, OnInit} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Component({
  selector: 'app-root',
  templateUrl: './delivery.html',
  styleUrls: ['./delivery.component.less'],
})
export class DeliveryComponent implements OnInit {
  title = 'badgepirates.com - delivery';

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
  }


  openBadgeCheckout(){
    var handler = (<any>window).StripeCheckout.configure({
      key: 'pk_live_V9gLHpvtUlp4XdWjcJ8hJB9v',
      locale: 'auto',
      token: (token: any) => {
        // You can access the token ID with `token.id`.
        // Get the token ID to your server-side code for use.
        this.sendBadgePost(token).subscribe(
          response => console.log(response),
          err => console.log(err)
        );
      }
    });

    handler.open({
      name: 'BadgePirates LLC',
      description: 'SecKC Defon 26 Badge',
      amount: 1000,
      "billing-address": true,
      "zip-code": true,
      locale: "auto",
      "shipping-address": true,
      image: "https://stripe.com/img/documentation/checkout/BPSkull.png"
    });
  }

  sendBadgePost(token) {
    let body = JSON.stringify(token);
    return this.http.post('https://api.badgepirates.com/api/order-badge', body, httpOptions);
  }
}
