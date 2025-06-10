import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

declare const grecaptcha: any;

@Component({
  selector: 'app-contact-form',
  standalone: false,
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss'
})
export class ContactFormComponent {
  contactForm: FormGroup;
  messageLength = 0;
  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  updateCharCount() {
    this.messageLength = this.contactForm.get('message')?.value?.length || 0;
  }



  onSubmit() {
    if (!this.contactForm.valid) {
      return;
    }

    grecaptcha.ready(() => {
      grecaptcha.execute('6LfROlcrAAAAADQMWEka1_jjK4cCswPeezBRHaiz', { action: 'contact_form' }).then((token: string) => {
        const formData = {
          ...this.contactForm.value,
          captcha: token
        };

        console.log('Submitting form with values:', formData);

        this.http.post('/api/contact', formData).subscribe({
          next: res => {
            console.log('Response from server:', res);
            alert('Form submitted successfully.');
          },
          error: err => {
            console.error('Error response from server:', err);
            alert('CAPTCHA verification failed.');
          }
        });
      });
    });
  }
}
