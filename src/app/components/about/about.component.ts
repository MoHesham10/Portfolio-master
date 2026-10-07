import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-about',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './about.component.html',
    styleUrl: './about.component.scss'
})
export class AboutComponent {
    stats = [
        { number: '+12', text: 'Students Mentored' },
        { number: '15+', text: 'Projects Completed' },
        { number: '3', text: 'Competition Wins' }
    ];
}
