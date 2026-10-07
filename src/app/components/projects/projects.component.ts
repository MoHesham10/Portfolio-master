import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
    images: string[];
    title: string;
    description: string;
    details: string[];
    technologies: string[];
    award?: string;
}

@Component({
    selector: 'app-projects',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './projects.component.html',
    styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
    showModal = false;
    selectedProject: Project | null = null;
    currentImageIndex = 0;
    imageLoaded: { [key: string]: boolean } = {};
    modalImageLoaded = false;

    projects: Project[] = [
        {
            images: [
                'images/Color Mixing Machine/Color Mixng Machine 6.png',
                'images/Color Mixing Machine/Color Mixng Machine 1.png',
                'images/Color Mixing Machine/Color Mixng Machine 2.png',
                'images/Color Mixing Machine/Color Mixng Machine 3.png',
                'images/Color Mixing Machine/Color Mixng Machine 4.png',
                'images/Color Mixing Machine/Color Mixng Machine 5.png'
            ],
            title: 'Color Mixing Machine',
            description: 'PLC and SCADA-controlled system for automated RGB color mixing in bottles',
            technologies: ['Siemens S7-1200', 'WinCC Advanced', 'SCL (Structured Control Language)', 'Function Blocks', 'Timers', 'PLC Programming', 'Conveyor Automation', 'Sensors', 'Mixing Control'],
            details: [
                'Programmed in SCL with custom Function Blocks for modular control logic',
                'Implemented timers for precise pump activation and mixing duration',
                'User selects target color from SCADA HMI (RGB or color picker)',
                'Empty bottle is released onto conveyor and positioned under dosing stations',
                'Three dosing pumps add R, G, B dyes in precise proportions based on selected color',
                'Siemens S7-1200 controls sensors, conveyor, pumps, and mixer sequencing',
                'WinCC Advanced HMI shows real-time status, color preview, and manual override',
                'Automated mixing and quality check ensures output matches desired color'
            ]
        },

        {
            images: [
                'images/Sterilizer Control/Sterilizer Control 1.png',
                'images/Sterilizer Control/Sterilizer Control 2.png',
                'images/Sterilizer Control/Sterilizer Control 3.png',
                'images/Sterilizer Control/Sterilizer Control 4.png',
                'images/Sterilizer Control/Sterilizer Control 5.png',
                
            ],
            title: 'Sterilizer Control System',
            description: 'Electrical control system designed and simulated for an automated sterilizer machine',
            technologies: [
                'CADe SIMU',
                'Electrical Control Circuits',
                'Relay Logic',
                'Contactors',
                'Timers',
                'Control Panel Design',
                'Electrical Wiring',
                'Sequential Control',
                'Sensors',
                'Industrial Automation'
            ],
            details: [
                'Designed the complete electrical control circuit for an automated sterilizer machine',
                'Designed and verified the control logic using CADe SIMU simulation',
                'Implemented relay-based sequential control for the different sterilization stages',
                'Used timers to control the duration of each process stage',
                'Implemented contactors for switching and controlling the main electrical loads',
                'Designed interlocking logic to ensure safe and correct sequence operation',
                'Implemented push buttons and selector controls for operator interaction',
                'Added indicator lamps to display the operating status of different system stages',
                'Implemented an audible alarm to indicate cycle completion or system status',
                'Assembled and wired the practical control panel based on the simulated design',
                'Tested the control sequence and verified the system operation practically'
            ]
        },
        {
            images: ['images/Bookify - Hotel Reservation System/Screenshot 2026-02-12 133921.png'],
            title: 'Bookify - Hotel Reservation System',
            description: 'DEPI Graduation Project - Full-stack hotel reservation platform with booking workflow and admin panel',
            technologies: ['ASP.NET Core MVC', 'C#', 'SQL Server', 'Entity Framework', 'Bootstrap', 'Stripe'],
            details: [
                'Smart room search based on dates, capacity, and room categories',
                'Detailed room pages including pricing, amenities, and images',
                'Smooth booking workflow with support for multiple reservations',
                'Secure user authentication with ASP.NET Identity and role-based authorization',
                'Online payment handling using Stripe integration',
                'Comprehensive admin panel for managing rooms, pricing, and reservations',
                'Built with N-Tier Architecture and Repository/Unit of Work patterns',
                'Developed as part of Digital Egypt Pioneers Initiative (DEPI)'
            ]
        },
        {
            images: [
                'images/AI-Based Autonomous Research Boat/1752428412699.jpg',
                'images/AI-Based Autonomous Research Boat/20250923_183005.jpg',
                'images/AI-Based Autonomous Research Boat/IMG-20250925-WA0018.jpg',
                'images/AI-Based Autonomous Research Boat/1752428412357.jpg'
            ],
            title: 'AI-Based Autonomous Research Boat',
            description: 'Siemens EDA Funded - IoT & Dashboard Developer for autonomous marine robot with real-time monitoring',
            award: 'IEEEMSB 2025 IoT Competition 1st Place',
            technologies: ['Angular', 'IoT', 'Computer Vision', 'Leaflet', 'Real-time Dashboard', 'Sensor Integration', 'WebSockets'],
            details: [
                'Developed comprehensive web dashboard for real-time monitoring and control',
                'Integrated computer vision system with web interface for live camera feed',
                'Built real-time statistics display for sensor data (wind speed, direction, environmental metrics)',
                'Implemented manual control mode for remote robot operation',
                'Designed path planning system with interactive map interface',
                'Enabled autonomous navigation along predefined routes on the map',
                'Integrated data logging system that records sensor readings at discovered locations',
                'Real-time visualization of collected data points on the map',
                'Funded and supported by Siemens EDA (Siemens Digital Industries Software)'
            ]
        },
        {
            images: [
                'images/internship/IMG20240811130015.jpg',
                'images/internship/IMG20240806185118.jpg',
                'images/internship/IMG20240806195538.jpg'
            ],
            title: 'Elevator Systems - Industrial Internship',
            description: 'Hands-on industrial training in elevator installation, control systems, and mechanical integration',
            technologies: ['Classic Control', 'Motor Control', 'Power Systems', 'Mechanical Installation', 'Control Panels'],
            details: [
                'Classic control systems implementation for elevator operation',
                'Installation and configuration of elevator motors and drive systems',
                'Mechanical assembly and integration of elevator components',
                'External power supply connections and electrical wiring',
                'Control panel installation and testing',
                'Safety systems integration and compliance verification'
            ]
        },
        {
            images: [
                'images/Micromouse Autonomous Robot/378096867-a702d02c-65c8-454d-bf29-d570bcb35345.jpg',
                'images/Micromouse Autonomous Robot/IMG-20240927-WA0025.jpg',
                'images/Micromouse Autonomous Robot/IMG-20240927-WA0033.jpg',
                'images/Micromouse Autonomous Robot/378095205-a3dcaf06-35f1-4eba-b373-7a1086af5753.jpg',
                'images/Micromouse Autonomous Robot/Screenshot 2025-08-14 213514.png',
                'images/Micromouse Autonomous Robot/Screenshot 2025-08-14 215703.png'
            ],
            title: 'Micromouse Autonomous Robot',
            description: 'IEEE 2nd Place - Flood Fill maze-solving with PID control and encoder-based localization',
            award: 'IEEE 2nd Place & Best Software Performance',
            technologies: ['Arduino', 'C++', 'PID Control', 'Flood Fill Algorithm', 'Encoders'],
            details: [
                'Implemented Flood Fill maze-solving algorithm for optimal path finding',
                'Developed PID motor control system for precise movement',
                'Integrated encoder-based localization for accurate position tracking',
                'Awarded Best Software Performance for efficient navigation algorithms',
                'Complete autonomous navigation with real-time decision making'
            ]
        },
        {
            images: [
                'images/Classic Control/Screenshot 2026-02-12 160051.png',
                'images/Classic Control/Screenshot 2026-02-12 160205.png'
            ],
            title: 'Classic Control Simulations - Automation Studio',
            description: 'Motor control simulations using relays, contactors, and timers in Automation Studio',
            technologies: ['Automation Studio', 'Classic Control', 'Relays', 'Contactors', 'Timers', 'Motor Control'],
            details: [
                'Designed and simulated motor control circuits using classic control elements',
                'Implemented relay logic for motor start/stop sequences',
                'Integrated contactors for power switching and motor protection',
                'Configured timer circuits for automated control sequences',
                'Created comprehensive wiring diagrams and control schematics',
                'Simulated real-world industrial motor control scenarios'
            ]
        },
        {
            images: [
                'images/factoryIO/1.png',
                'images/factoryIO/2.png',
                'images/factoryIO/3.png'
            ],
            title: 'Industrial Conveyor Automation',
            description: 'PLC-based conveyor system simulation using Factory I/O with sensors and motor control',
            technologies: ['Siemens PLC', 'Ladder Logic', 'Factory I/O', 'Sensors', 'Motor Control'],
            details: [
                'Simulated automated conveyor system with multiple sensors',
                'Programmed PLC logic using Ladder Logic for industrial automation',
                'Integrated proximity sensors and photoelectric sensors for object detection',
                'Implemented motor control sequences with start/stop logic',
                'Safety interlocks and emergency stop functionality'
            ]
        },
        {
            images: [
                'images/Fire Fighting Robot/474483430_1301135154420290_4174465939029131247_n.jpg',
                'images/Fire Fighting Robot/1723922319917.jpg',
                'images/Fire Fighting Robot/1723922382114.jpg'
            ],
            title: 'Fire Fighting Robot',
            description: 'IEEE 1st Place - ESP32-based motor control with Bluetooth and automated water pump system',
            award: 'IEEE Formula Fire Fighting 1st Place',
            technologies: ['ESP32', 'Bluetooth', 'C++', 'Motor Drivers', 'Sensors'],
            details: [
                'ESP32-based autonomous fire detection and extinguishing system',
                'Bluetooth communication for remote monitoring and control',
                'Automated water pump activation upon fire detection',
                'IR flame sensors for accurate fire location detection',
                'Motor control system for precise navigation and positioning'
            ]
        }
    ];

    openModal(project: Project) {
        this.selectedProject = project;
        this.currentImageIndex = 0;
        this.modalImageLoaded = false;
        this.showModal = true;
        document.body.style.overflow = 'hidden';
    }

    onImageLoad(projectTitle: string) {
        this.imageLoaded[projectTitle] = true;
    }

    onModalImageLoad() {
        this.modalImageLoaded = true;
    }

    closeModal() {
        this.showModal = false;
        this.selectedProject = null;
        this.currentImageIndex = 0;
        document.body.style.overflow = 'auto';
    }

    nextImage() {
        if (this.selectedProject) {
            this.modalImageLoaded = false;
            this.currentImageIndex = (this.currentImageIndex + 1) % this.selectedProject.images.length;
        }
    }

    prevImage() {
        if (this.selectedProject) {
            this.modalImageLoaded = false;
            this.currentImageIndex = (this.currentImageIndex - 1 + this.selectedProject.images.length) % this.selectedProject.images.length;
        }
    }

    setImage(index: number) {
        this.modalImageLoaded = false;
        this.currentImageIndex = index;
    }
}
