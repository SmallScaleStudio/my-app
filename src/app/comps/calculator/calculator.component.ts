import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {
  studentName: string = "Your Name"; 
  score: number = 75; 
  gradeColor: string = "#2E75B6"; 
  passing: boolean = true; 
  colSpan: number = 2; 
  isHighlighted: boolean = false; 

  // Event & interaction properties
  lastKey: string = "";
  typedText: string = "";
  clickCount: number = 0;

  // Compute letter grade
  getLetterGrade(): string { 
    if (this.score >= 90) return "A"; 
    else if (this.score >= 80) return "B"; 
    else if (this.score >= 70) return "C"; 
    else if (this.score >= 60) return "D"; 
    else return "F"; 
  }

  // Event handlers
  onClick(): void {
    this.clickCount++;
  }

  onKey(event: KeyboardEvent): void {
    this.lastKey = event.key;
  }

  onInput(event: Event): void {
    this.typedText = (event.target as HTMLInputElement).value;
  }

  toggleHighlight(): void {
    this.isHighlighted = !this.isHighlighted;
  }
}
