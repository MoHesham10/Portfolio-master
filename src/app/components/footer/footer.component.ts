import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-footer',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './footer.component.html',
    styleUrl: './footer.component.scss'
})
export class FooterComponent {
    currentYear = new Date().getFullYear();

    quickLinks = [
        { name: 'Home', url: '#Home' },
        { name: 'About', url: '#About' },
        { name: 'Skills', url: '#Skills' },
        { name: 'Projects', url: '#projects' }
    ];

    services = [
        { name: 'PLC Programming', url: '#contact' },
        { name: 'Motor Control', url: '#contact' },
        { name: 'Embedded Systems', url: '#contact' },
        { name: 'Automation Consulting', url: '#contact' }
    ];

    socialLinks = [
        { icon: 'fab fa-github', url: 'https://github.com/mohamedali559' },
        { icon: 'fab fa-linkedin', url: 'https://www.linkedin.com/in/mohamed-ali-saber-/' }
    ];
}
