import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-education',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './education.component.html',
    styleUrl: './education.component.scss'
})
export class EducationComponent {
    currentMediaIndex = 0;

    education = {
        university: 'Mansoura University',
        degree: 'Bachelor in Mechatronics Engineering',
        gpa: '3.71 / 4.0 (Excellent)',
        period: '2020 – 2025',
        project: {
            name: 'NERITES',
            grade: 'A+',
            description: 'AI-Powered Remotely Operated Underwater Vehicle (ROV) for Visual Exploration and Robotic Object Retrieval',
            media: [
                {
                    url: 'images/Graduation_Project/IMG-20260127-WA0081.jpg'
                },
                {
                    url: 'images/Graduation_Project/Screenshot 2026-01-23 234018.png'
                },
                {
                    url: 'images/Graduation_Project/Screenshot 2026-01-24 180207.png'
                },
                {
                    url: 'images/Graduation_Project/Screenshot 2026-01-24 180318.png'
                },
                {
                    url: 'images/Graduation_Project/Screenshot 2026-01-24 180628.png'
                },
                {
                    url: 'images/Graduation_Project/IMG-20260127-WA0039.jpg'
                }
            ],
            features: [
                {
                    title: 'Underwater Visual Exploration',
                    description: 'Real-time video streaming for underwater observation.'
                },
                {
                    title: 'Thruster-Based Maneuverability',
                    description: 'Controlled movement and depth adjustment.'
                },
                {
                    title: 'Integrated ROV Control System',
                    description: "Coordinated control of the vehicle's propulsion and onboard systems."
                },
                {
                    title: '3-DOF Robotic Arm',
                    description: 'Precise underwater object retrieval.'
                },
                {
                    title: 'Adaptive Sport Mode',
                    description: 'Dynamic thruster orientation to adjust thrust and vehicle speed.'
                }
            ]
        }
    };

    nextMedia() {
        this.currentMediaIndex = (this.currentMediaIndex + 1) % this.education.project.media.length;
    }

    prevMedia() {
        this.currentMediaIndex = (this.currentMediaIndex - 1 + this.education.project.media.length) % this.education.project.media.length;
    }

    setMedia(index: number) {
        this.currentMediaIndex = index;
    }

    get currentMedia() {
        return this.education.project.media[this.currentMediaIndex];
    }
}
