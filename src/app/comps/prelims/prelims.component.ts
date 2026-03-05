import { Component } from '@angular/core';

@Component({
  selector: 'app-prelims',
  templateUrl: './prelims.component.html',
  styleUrls: ['./prelims.component.css']
})
export class PrelimsComponent {

  student_name!: string;
  age!: number;
  isEnrolled!: boolean;
  studentId!: number;
  courseName!: string;

  middleName!: string | null;
  graduationYear!: number | undefined;
  emailAddress!: string | null;

  sum!: number;
  difference!: number;
  product!: number;
  quotient!: number;

  favoriteColors!: string[];
  testScores!: number[];
  mixedArray!: (string | number)[];

  tuple!: [string, number, boolean];

  student!: any;
  book!: any;
  course!: any;

  constructor() {
    this.runLabActivity();
  }

  runLabActivity(): void {

    this.student_name = "Pasion Ysmael P";
    this.age = 21;
    this.isEnrolled = true;
    this.studentId = 20238616;
    this.courseName = "Application Development 1";

    this.middleName = "Pedro";
    this.graduationYear = undefined;
    this.emailAddress = "20238618@s.ubaguio.edu";

    let num1 = 25;
    let num2 = 17;

    this.sum = num1 + num2;
    this.difference = num1 - num2;
    this.product = num1 * num2;
    this.quotient = num1 / num2;

    this.favoriteColors = ["Oliver Green", "Teal", "Yellow"];
    this.testScores = [75, 75, 75, 75, 75];
    this.mixedArray = ["Lemon", 10, "Cookie", 20];

    this.tuple = ["Status", 200, true];

    this.student = { name: "Ysmael", id: 20238618, isActive: true };
    this.book = { title: "Les Fleur du Mal", author: "Charles Baudelaire", pages: 400, isAvailable: true };
    this.course = { courseCode: "APPDEV1", courseName: "Application Development 1", units: 3, instructor: "Ma'am Erna-kristi Martinez" };

  }

}