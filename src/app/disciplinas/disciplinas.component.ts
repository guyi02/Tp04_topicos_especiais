import { Component, OnInit } from '@angular/core';
import { CoursesServiceService } from '../services/courses-service.service';
import { Course } from '../models/CourseType';
@Component({
  selector: 'app-disciplinas',
  templateUrl: './disciplinas.component.html',
  styleUrls: ['./disciplinas.component.css'],
})
export class DisciplinasComponent implements OnInit {
  myCourses;
  constructor(private coursesService: CoursesServiceService) {}

  ngOnInit(): void {
    this.myCourses = this.coursesService.getCourses();
  }
}
