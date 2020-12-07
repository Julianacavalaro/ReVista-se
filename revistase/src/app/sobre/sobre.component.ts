import { Component, OnInit } from '@angular/core';
import { faInstagram} from '@fortawesome/free-brands-svg-icons'

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.css']
})
export class SobreComponent implements OnInit {

  faInstagram = faInstagram

  constructor() { }

  ngOnInit(): void {
  }

}
