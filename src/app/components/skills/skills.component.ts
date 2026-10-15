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
            icon: 'fas fa-drafting-compass',
            title: 'Mechanical Design &\u00A0CAD',
            items: [
                { icon: 'fas fa-cubes', name: 'SolidWorks' },
                { icon: 'fas fa-industry', name: 'Sheet Metal & Weldments' },
                { icon: 'fas fa-chart-line', name: 'Static Stress Simulation' },
                { icon: 'fas fa-cogs', name: 'Gears & Power Transmission' },
                { icon: 'fas fa-search', name: 'Reverse Engineering' }
            ]
        },
        {
            icon: 'fas fa-tools',
            title: 'Manufacturing &\u00A0Fabrication',
            items: [
                { icon: 'fas fa-print', name: '3D Printing' },
                { icon: 'fas fa-cogs', name: 'CNC Machining' },
                { icon: 'fas fa-industry', name: 'Sheet Metal Fabrication' },
                { icon: 'fas fa-ruler-combined', name: 'Design for Manufacturing' },
                { icon: 'fas fa-tools', name: 'Production Support' }
            ]
        },
        {
            icon: 'fas fa-robot',
            title: 'Mechanisms &\u00A0Robotics',
            items: [
                { icon: 'fas fa-robot', name: 'Robotic Mechanism Design' },
                { icon: 'fas fa-water', name: 'Thruster Configuration' },
                { icon: 'fas fa-cog', name: 'Actuator & Motor Selection' },
                { icon: 'fas fa-hand-rock', name: 'Robotic Manipulators' }
            ]
        },
        {
            icon: 'fas fa-industry',
            title: 'PLC &\u00A0Automation',
            items: [
                { icon: 'fas fa-industry', name: 'Siemens PLC' },
                { icon: 'fas fa-sliders-h', name: 'TIA Portal' },
                { icon: 'fas fa-project-diagram', name: 'Ladder Logic' },
                { icon: 'fas fa-bolt', name: 'Classic Control Circuits' },
                { icon: 'fas fa-broadcast-tower', name: 'Sensors & Actuators' },
                { icon: 'fas fa-tachometer-alt', name: 'Industrial Motor Drives' }
            ]
        },
        {
            icon: 'fas fa-microchip',
            title: 'Embedded Systems &\u00A0Electronics',
            items: [
                { icon: 'fas fa-microchip', name: 'Arduino' },
                { icon: 'fas fa-wifi', name: 'ESP32' },
                { icon: 'fas fa-project-diagram', name: 'Circuits Design' },
                { icon: 'fas fa-vial', name: 'Proteus' },
                { icon: 'fas fa-microchip', name: 'PCB Design & Layout' }
            ]
        },
        {
            icon: 'fas fa-handshake',
            title: 'Soft Skills',
            items: [
                { icon: 'fas fa-puzzle-piece', name: 'Problem-Solving' },
                { icon: 'fas fa-brain', name: 'Analytical Thinking' },
                { icon: 'fas fa-handshake', name: 'Teamwork & Collaboration' },
                { icon: 'fas fa-sync-alt', name: 'Adaptability & Fast Learning' }
            ]
        }
    ];
}
