import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Skill {
    icon: string;
    title: string;
    items: { icon: string; name: string }[];
}

@Component({
    selector: 'app-skills',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './skills.component.html',
    styleUrl: './skills.component.scss'
})
export class SkillsComponent {
    skills: Skill[] = [
        {
            icon: 'fas fa-microchip',
            title: 'PLC & Automation',
            items: [
                { icon: 'fas fa-project-diagram', name: 'Siemens PLC' },
                { icon: 'fas fa-cogs', name: 'TIA Portal' },
                { icon: 'fas fa-network-wired', name: 'Ladder Logic' },
                { icon: 'fas fa-industry', name: 'Factory I/O' },
                { icon: 'fas fa-code', name: 'SCL' },
                { icon: 'fas fa-tv', name: 'SCADA & HMI' }
            ]
        },
        {
            icon: 'fas fa-bolt',
            title: 'Motor Control & Circuits',
            items: [
                { icon: 'fas fa-plug', name: 'Contactors' },
                { icon: 'fas fa-stopwatch', name: 'Timers & Relays' },
                { icon: 'fas fa-tachometer-alt', name: 'AC Drives' },
                { icon: 'fas fa-power-off', name: 'Soft Starters' }
            ]
        },
        {
            icon: 'fas fa-microchip',
            title: 'Embedded Systems',
            items: [
                { icon: 'fas fa-microchip', name: 'Arduino' },
                { icon: 'fas fa-microchip', name: 'STM32' },
                { icon: 'fas fa-wifi', name: 'ESP32' },
                { icon: 'fas fa-sitemap', name: 'UART/SPI/I2C' }
            ]
        },
        {
            icon: 'fas fa-sliders-h',
            title: 'Control Systems',
            items: [
                { icon: 'fas fa-chart-line', name: 'PID Control' },
                { icon: 'fas fa-memory', name: 'Encoders' },
                { icon: 'fas fa-broadcast-tower', name: 'Sensors (IR/US)' },
                { icon: 'fas fa-sync-alt', name: 'Motor Drivers' }
            ]
        },
        {
            icon: 'fas fa-code',
            title: 'Programming',
            items: [
                { icon: 'fab fa-cuttlefish', name: 'C/C++' },
                { icon: 'fab fa-microsoft', name: 'C#' },
                { icon: 'fab fa-python', name: 'Python' },
                { icon: 'fab fa-git-alt', name: 'Git' }
            ]
        },
        {
            icon: 'fas fa-robot',
            title: 'Robotics & Competitions',
            items: [
                { icon: 'fas fa-route', name: 'Micromouse' },
                { icon: 'fas fa-fire', name: 'Fire Fighting' },
                { icon: 'fas fa-network-wired', name: 'IoT Systems' },
                { icon: 'fas fa-trophy', name: 'IEEE Winner' }
            ]
        }
    ];
}
