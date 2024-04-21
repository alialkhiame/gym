import {Component} from '@angular/core';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-hosme',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {
  selectedDate: Date;
  exercises = [
    { name: 'Push-ups' },
    { name: 'Pull-ups' },
    { name: 'Squats' }
  ];
  exercise: string="";
  repetitions: number;
  weight: number;

  dateChanged(newDate: Date) {
    this.selectedDate = newDate;
  }

  constructor() {
    this.selectedDate=new Date();
    this.exercise="exercise";

    this.repetitions=2;
    this.weight=3;
  }
  saveExercise() {
    console.log('Exercise:', this.exercise, 'Reps:', this.repetitions, 'Weight:', this.weight, 'on', this.selectedDate);
    // Here you would typically save this data to a backend or local storage
  }
}
