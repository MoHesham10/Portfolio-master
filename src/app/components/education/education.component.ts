import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

interface Media {
    type: 'video' | 'image';
    url: string;
    thumbnail?: string;
}

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
        gpa: '3.66 / 4.0',
        period: '2021 – 2026',
        project: {
            name: 'CrashXpert',
            grade: 'A+',
            description: 'IoT-based car accident management system with real-time monitoring and AI detection',
            media: [
                {
                    type: 'image' as const,
                    url: 'images/Graduation_Project/IMG-20260127-WA0081.jpg'
                },
                {
                    type: 'image' as const,
                    url: 'images/Graduation_Project/Screenshot 2026-01-23 234018.png'
                },
                {
                    type: 'image' as const,
                    url: 'images/Graduation_Project/Screenshot 2026-01-24 180207.png'
                },
                {
                    type: 'image' as const,
                    url: 'images/Graduation_Project/Screenshot 2026-01-24 180318.png'
                },
                {
                    type: 'image' as const,
                    url: 'images/Graduation_Project/Screenshot 2026-01-24 180628.png'
                },
                {
                    type: 'image' as const,
                    url: 'images/Graduation_Project/IMG-20260127-WA0039.jpg'
                },

                {
                    type: 'video' as const,
                    url: 'https://www.youtube-nocookie.com/embed/EH3oJ_wg3ZY',
                    thumbnail: 'images/Graduation_Project/Screenshot 2026-01-23 234018.png'
                }

            ],
            features: [
                'Real-time accident detection using ESP32 & Raspberry Pi',
                'Live camera streaming with YOLO object detection',
                'AI-powered drowsiness detection',
                'Multi-channel emergency notifications',
                'Built with Angular 18, Firebase, and IoT hardware'
            ]
        }
    };

    constructor(private sanitizer: DomSanitizer) { }

    getSafeUrl(url: string): SafeResourceUrl {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    }

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
