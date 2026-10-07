import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface PricingPackage {
    name: string;
    price: string;
    features: string[];
    featured?: boolean;
}

@Component({
    selector: 'app-pricing',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './pricing.component.html',
    styleUrl: './pricing.component.scss'
})
export class PricingComponent {
    packages: PricingPackage[] = [
        {
            name: 'Basic Package',
            price: '$499',
            features: [
                'Static Website',
                '3 Pages',
                'Responsive Design',
                'Basic SEO'
            ]
        },
        {
            name: 'Standard Package',
            price: '$999',
            features: [
                'Dynamic Website',
                '5 Pages',
                'CMS Integration',
                'Advanced SEO'
            ],
            featured: true
        },
        {
            name: 'Premium Package',
            price: '$1999',
            features: [
                'Full-Stack Application',
                'Unlimited Pages',
                'Database Integration',
                'Premium Support'
            ]
        }
    ];
}
