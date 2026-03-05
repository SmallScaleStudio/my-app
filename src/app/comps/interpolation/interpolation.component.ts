import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';

export interface User {
  name?: string;
  position?: string;
  department?: string;
  details?: { role: string };
}

@Component({
  selector: 'app-interpolation',
  standalone: true,
  imports: [FormsModule, JsonPipe],
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.css'],
})
export class InterpolationComponent {
  title: string = 'Angular Data Binding Demo';
  studentName: string = 'Maria Santos';
  courseCode: string = 'APPDEV1';
  currentYear: number = new Date().getFullYear();
  roles = ['Admin', 'Editor', 'Viewer'];
  isActive: boolean = false;

  user: User = {
    name: 'John Doe',
    position: 'Software Engineer',
    department: 'IT',
    details: { role: 'Admin' }
  };

  countries = [
    { id: 'PH', name: 'Philippines' },
    { id: 'US', name: 'United States' },
    { id: 'JP', name: 'Japan' }
  ];
  selectedCountryId = 'PH';

  skills = ['Angular', 'TypeScript', 'RxJS'];

  projects = [
    { id: 1, name: 'Dashboard' },
    { id: 2, name: 'Mobile App' }
  ];

  getWelcomeMessage(): string {
    return `Welcome, ${this.studentName}! Today we learn data binding.`;
  }
  onCountryChange(event: string) {
    console.log('Changed country to:', event);
  }
}