import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import Swal from  'sweetalert2/dist/sweetalert2.js';

declare var paypal;

@Component({
  selector: 'app-pagamento',
  templateUrl: './pagamento.component.html',
  styleUrls: ['./pagamento.component.css']
})

export class PagamentoComponent implements OnInit {

  @ViewChild('paypal', {static: true}) paypalElement: ElementRef

  product = {
    price: 19.97,
    description: 'Headset gamer', 
  }

  paidFor = false

  constructor() {
  }

  ngOnInit() {
    paypal.Buttons({
      createOrder: (data, actions) => {
        return actions.order.create({
          purchase_units: [{
            description: this.product.description,
            amount: {
              currency_code: 'BRL',
              value: this.product.price
            }
          }]
        })
      },
      onApprove: async (data, actions) => {
        const order = await actions.order.capture()
        this.paidFor = true,
        console.log(order)
      },
      onError: err => {
        console.log(err)
      }
    })
    .render(this.paypalElement.nativeElement)
  }
  
  qrcodeAlert(){
    Swal.fire({
      title: 'Seu pedido foi enviado!',
      text: 'Apresente esse QR Code em qualquer uma de nossas lojas para finalizar o pagamento e retirar seu pedido',
      imageUrl: 'https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=http://localhost:8080/pedidos/F5A3rs9as93koas31a',
      imageWidth: 250,
      imageHeight: 250,
      imageAlt: 'QR Code',
      footer: 'Esse QR Code foi enviado para seu email'
    })
  }
  
}