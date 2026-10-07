import { Component, signal, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';

declare const FinisherHeader: any;

@Component({
    selector: 'app-hero',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './hero.component.html',
    styleUrl: './hero.component.scss'
})
export class HeroComponent implements OnInit, OnDestroy, AfterViewInit {
    displayText = signal('');
    private texts = ['Mechatronics Engineer', 'Mechanical Design & Automation'];
    private textIndex = 0;
    private charIndex = 0;
    private isDeleting = false;
    private timeoutId: any;

    ngOnInit() {
        this.type();
    }

    ngAfterViewInit() {
        // استخدام setTimeout لضمان أن DOM جاهز تماماً
        setTimeout(() => {
            this.initFinisherHeader();
        }, 500);
    }

    ngOnDestroy() {
        if (this.timeoutId) {
            clearTimeout(this.timeoutId);
        }
    }

    private type() {
        const currentText = this.texts[this.textIndex];

        if (this.isDeleting) {
            this.displayText.set(currentText.substring(0, this.charIndex - 1));
            this.charIndex--;
        } else {
            this.displayText.set(currentText.substring(0, this.charIndex + 1));
            this.charIndex++;
        }

        let typeSpeed = this.isDeleting ? 50 : 150;

        if (!this.isDeleting && this.charIndex === currentText.length) {
            typeSpeed = 1000;
            this.isDeleting = true;
        } else if (this.isDeleting && this.charIndex === 0) {
            this.isDeleting = false;
            this.textIndex = (this.textIndex + 1) % this.texts.length;
        }

        this.timeoutId = setTimeout(() => this.type(), typeSpeed);
    }

    private initFinisherHeader() {
        if (typeof FinisherHeader !== 'undefined') {
            new FinisherHeader({
                "count": 60,
                "size": {
                    "min": 2,
                    "max": 11,
                    "pulse": 0
                },
                "speed": {
                    "x": {
                        "min": 0,
                        "max": 0.4
                    },
                    "y": {
                        "min": 0,
                        "max": 0.6
                    }
                },
                "colors": {
                    "background": "#000000",
                    "particles": [
                        "#fbfcca",
                        "#d7f3fe",
                        "#ffd0a7"
                    ]
                },
                "blending": "overlay",
                "opacity": {
                    "center": 1,
                    "edge": 0.2
                },
                "skew": 0,
                "shapes": [
                    "t",
                    "c",
                    "s"
                ]
            });
        }
    }

    downloadCV() {
        const link = document.createElement('a');
        link.href = 'CV.pdf';
        link.download = 'Mohamed_Ali_CV.pdf';
        link.click();
    }
}
