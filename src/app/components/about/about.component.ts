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
        { number: '20+', text: 'Students Mentored' },
        { number: '12+', text: 'Projects Completed' },
        { number: '6', text: 'Competition Wins' }
    ];
}
