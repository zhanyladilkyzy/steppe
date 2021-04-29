import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  contactForm = new FormGroup({
    email: new FormControl('',[Validators.email, Validators.pattern("^@"), Validators.required]),
  })
  ngOnInit(): void {
  }
  onSubmit() {
    console.log("Subscribed email: "+ this.contactForm.value, this.contactForm.value.email);
    return confirm('Are u sure to subscribe?');
  }

}
