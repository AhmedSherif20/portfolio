import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup = new FormGroup({
    name: new FormControl(null, [Validators.required]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    subject: new FormControl(null, [Validators.required]),
    message: new FormControl(null, [Validators.required]),
  });

  formError: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  sendEmail(formData: FormGroup): void {
    console.log(formData.status, formData.value);

    if (formData.valid) {
      this.formError = false;
      // console.log(formData.value);
    } else {
      this.formError = true;
    }
  }

  test() {}
}
