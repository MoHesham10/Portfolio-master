import { Component, signal, OnInit, OnDestroy, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-navbar',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './navbar.component.html',
    styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit, OnDestroy {
    activeSection = signal('Home');
    isDarkTheme = signal(true);
    isMenuOpen = signal(false);
    private sections = ['Home', 'About', 'Education', 'certifications', 'Skills', 'projects', 'contact'];

    ngOnInit() {
        const savedTheme = localStorage.getItem('theme') || 'dark';
        this.isDarkTheme.set(savedTheme === 'dark');
        this.applyTheme();
        this.updateActiveSection();
    }

    ngOnDestroy() {
        // Cleanup if needed
    }

    @HostListener('window:scroll', [])
    onWindowScroll() {
        this.updateActiveSection();
    }

    toggleTheme() {
        this.isDarkTheme.update(val => !val);
        this.applyTheme();
        localStorage.setItem('theme', this.isDarkTheme() ? 'dark' : 'light');
    }

    private applyTheme() {
        if (this.isDarkTheme()) {
            document.body.removeAttribute('data-theme');
        } else {
            document.body.setAttribute('data-theme', 'light');
        }
    }

    setActiveSection(section: string) {
        this.activeSection.set(section);
    }

    toggleMenu() {
        this.isMenuOpen.update(val => !val);
    }

    closeMenu() {
        this.isMenuOpen.set(false);
    }

    private updateActiveSection() {
        const scrollPosition = window.scrollY + 120;

        for (let i = this.sections.length - 1; i >= 0; i--) {
            const section = this.sections[i];
            const element = document.getElementById(section);
            if (element) {
                const offsetTop = element.offsetTop;

                if (scrollPosition >= offsetTop - 100) {
                    this.activeSection.set(section);
                    break;
                }
            }
        }
    }
}
