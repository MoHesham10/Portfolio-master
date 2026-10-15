import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';

interface ContactInfo {
    icon: string;
    text: string;
}

@Component({
    selector: 'app-contact',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule],
    templateUrl: './contact.component.html',
    styleUrl: './contact.component.scss'
})
export class ContactComponent {
    contactForm: FormGroup;
    isSubmitting = false;
    submitMessage = '';
    submitSuccess = false;

    contactInfo: ContactInfo[] = [
        { icon: 'fas fa-envelope', text: 'muhamed.hesham55@gmail.com' },
        { icon: 'fas fa-phone', text: '+966 535378786' },
        { icon: 'fas fa-map-marker-alt', text: 'Jeddah, Saudi Arabia' }
    ];

    socialLinks = [
        { icon: 'fab fa-linkedin', url: 'https://www.linkedin.com/in/mohamedd-heshamm' }
    ];

    constructor(private fb: FormBuilder) {
        this.contactForm = this.fb.group({
            name: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            subject: ['', Validators.required],
            message: ['', Validators.required]
        });
    }

    async onSubmit() {
        if (this.contactForm.valid) {
            this.isSubmitting = true;
            this.submitMessage = '';

            try {
                // Initialize EmailJS with your public key
                emailjs.init('lZiyAUoqMz0IQrify');

                const templateParams = {
                    from_name: this.contactForm.value.name,
                    from_email: this.contactForm.value.email,
                    subject: this.contactForm.value.subject,
                    message: this.contactForm.value.message,
                    to_email: 'muhamed.hesham55@gmail.com'
                };

                await emailjs.send(
                    'service_co4zids',
                    'template_0oian8t',
                    templateParams
                );

                this.submitSuccess = true;
                this.submitMessage = 'Message sent successfully! I will get back to you soon.';
                this.contactForm.reset();
            } catch (error) {
                this.submitSuccess = false;
                this.submitMessage = 'Failed to send message. Please try again or contact me directly via email.';
                console.error('EmailJS Error:', error);
            } finally {
                this.isSubmitting = false;
                setTimeout(() => {
                    this.submitMessage = '';
                }, 5000);
            }
        } else {
            Object.keys(this.contactForm.controls).forEach(key => {
                this.contactForm.get(key)?.markAsTouched();
            });
        }
    }
}
