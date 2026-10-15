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
            title: 'SCE – Mechatronics Engineer Accreditation',
            issuer: 'Saudi Council of Engineers',
            date: 'Aug 2026',
            image: 'images/Certificates/Cisco Certified Support Technician Networking.png'
        },
        {
            title: 'Flashforge Certificate - Advanced Maintenance & Repair',
            issuer: 'Flashforge 3D Technology Co.',
            date: 'June 2026',
            image: 'images/Certificates/HIVE_MQ.png'
        },
        {
            title: 'AAKRUTI Innovation Competition 2025 – Participation Certificate',
            issuer: 'Dassault Systèmes SOLIDWORKS',
            date: 'Oct 2025',
            image: 'images/Certificates/165.jpg'
        },
        {
            title: 'Certificate of Research Paper Presentation - MEPCON 2024',
            issuer: 'IEEE - International MEPCON Conference',
            date: 'December 2024',
            image: 'images/Certificates/DEPI.png'
        },
        {
            title: 'PLC Programming & Automation Trainee',
            issuer: 'HA Consulting Group',
            date: 'Jul 2024',
            image: 'images/Certificates/NTI.png'
        },
        {
            title: 'Head Mechanical Design - SparkTech Training',
            issuer: 'SparkTech',
            date: 'October 2023',
            image: 'images/Certificates/SW_HEAD.png'
        }
    ];
}
