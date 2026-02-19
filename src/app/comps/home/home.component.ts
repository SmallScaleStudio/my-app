import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common"; // <-- needed for ngClass/ngStyle

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule], // <-- add CommonModule here
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  // --- String Interpolation ---
  title: string = "Angular Home";
  score: number = 95;

  getGrade(): string {
    return this.score >= 60 ? "PASS" : "FAIL";
  }

  currentYear: number = new Date().getFullYear();

  // --- Property Binding ---
  isDisabled: boolean = true;
  imgSrc: string = "/roland.gif";
  inputMax: number = 100;

  // --- Event Binding ---
  count: number = 0;
  lastKey: string = "";
  typedText: string = "";

  onClick(): void {
    this.count++;
  }

  onKey(event: KeyboardEvent): void {
    this.lastKey = event.key;
  }

  onInput(event: Event): void {
    this.typedText = (event.target as HTMLInputElement).value;
  }

  // --- Two-Way Binding ---
  studentName: string = "Maria";
  studentScore: number = 85;

  // --- Attribute Binding ---
  span: number = 2;
  ariaDesc: string = "User score input";
  userId: string = "u-042";
  isWide: boolean = true;

  // --- Class Binding ---
  isActive: boolean = false;
  hasError: boolean = true;
  size: string = "medium";

  toggleActive(): void {
    this.isActive = !this.isActive;
  }

  // --- Style Binding ---
  fontColor: string = "#1F3864";
  bgColor: string = "#EBF3FB";
  fontSize: number = 16;
}
