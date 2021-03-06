import { Component, OnInit } from '@angular/core';
import { CartService } from '../cartService/cart.service';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
 items;
 checkoutForm;
  constructor(private cartService: CartService, private formBuilder: FormBuilder) {
      this.checkoutForm = this.formBuilder.group({
        name: '',
        address: ''
      });
     }

  ngOnInit() {
    this.items = this.cartService.getItems();
  }


  onSubmit(customerData) {
    // Process checkout data here
    this.items = this.cartService.clearCart();
    this.checkoutForm.reset();

    console.warn('Your order has been submitted', customerData);
  }
}
