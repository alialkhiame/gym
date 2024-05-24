import { Component, OnInit } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { SlicePipe } from "@angular/common";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule, CommonModule, SlicePipe],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  daysInMonth: number = 0;
  daysArray: number[] = []; // flat array of day numbers
  weeks: (number | null)[][] = []; // array of arrays, each can hold number or null, representing a week
  currentMonthName: string = "";
  currentYear: number = 0;
  isModalOpen = false;
  selectedDay: number | null = null;
  inputText: string = "";
  dayDetails: { [key: number]: string } = {}; // Store details for each day

  constructor() {}

  ngOnInit() {
    const currentDate = new Date();
    this.currentMonthName = currentDate.toLocaleString('default', { month: 'long' });
    this.currentYear = currentDate.getFullYear();

    this.daysInMonth = this.getCurrentMonthDays();
    this.daysArray = Array.from({ length: this.daysInMonth }, (_, i) => i + 1);
    this.generateWeeks();
  }

  getCurrentMonthDays(): number {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDayNextMonth = new Date(year, month + 1, 1);
    const lastDayCurrentMonth = new Date(firstDayNextMonth.getTime() - (24 * 60 * 60 * 1000));
    return lastDayCurrentMonth.getDate();
  }

  openDialog(day: number): void {
    this.selectedDay = day;
    this.inputText = this.dayDetails[day] || ""; // Load existing details if available
    this.isModalOpen = true;
  }

  closeDialog(): void {
    this.isModalOpen = false;
    this.selectedDay = null;
    this.inputText = "";
  }

  saveDetails(): void {
    if (this.selectedDay !== null) {
      this.dayDetails[this.selectedDay] = this.inputText;
      this.closeDialog();
    }
  }

  generateWeeks() {
    const firstDay = new Date(this.currentYear, new Date().getMonth(), 1).getDay();
    let week: (number | null)[] = [];
    // Create empty slots for days of the week before the first day
    for (let i = 0; i < firstDay; i++) {
      week.push(null);
    }
    // Fill in the actual days
    for (let day of this.daysArray) {
      week.push(day);
      if (week.length === 7) { // Week is complete
        this.weeks.push(week);
        week = [];
      }
    }
    // Fill remaining slots with null if the last week is not complete
    while (week.length > 0 && week.length < 7) {
      week.push(null);
    }
    if (week.length > 0) {
      this.weeks.push(week);
    }
  }
}
