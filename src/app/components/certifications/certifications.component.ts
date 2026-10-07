import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Certificate {
    title: string;
    issuer: string;
    date: string;
    description?: string;
    image: string;
    link?: string;
}

@Component({
    selector: 'app-certifications',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './certifications.component.html',
    styleUrl: './certifications.component.scss'
})
export class CertificationsComponent {
    certificates: Certificate[] = [
        {
            title: 'Cisco Certified Support Technician Networking',
            issuer: 'Cisco',
            date: 'May 2026',
            image: 'images/Certificates/Cisco Certified Support Technician Networking.png'
        },
        {
            title: 'HiveMQ Certified MQTT Associate',
            issuer: 'HiveMQ',
            date: 'February 2026',
            image: 'images/Certificates/HIVE_MQ.png'
        },
        {
            title: 'Full Stack .Net Web Developer',
            issuer: 'Digital Egypt Pioneers Initiative (DEPI)',
            date: 'June - December 2025',
            image: 'images/Certificates/DEPI.png'
        },
        {
            title: '18th Undergraduate Research Forum',
            issuer: 'Nile University',
            date: 'August 2024',
            image: 'images/Certificates/165.jpg'
        },
        {
            title: 'Machine Learning for Data Analysis',
            issuer: 'National Telecommunication Institute (NTI)',
            date: 'September - October 2024',
            image: 'images/Certificates/NTI.png'
        },
        {
            title: 'Head Software - SparkTech Training',
            issuer: 'SparkTech',
            date: 'October 2023',
            image: 'images/Certificates/SW_HEAD.png'
        }
    ];
}
