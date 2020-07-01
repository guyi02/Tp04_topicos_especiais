import { Injectable } from '@angular/core';
import { Data } from '../data';

@Injectable({
  providedIn: 'root',
})
export class CoursesServiceService {
  constructor() {}

  getCourses() {
    return Data;
  }

  getCourse(sigla: string) {
    let filteredCourse = null;
    Data.map((course) => {
      course.subjects.filter((obj) => {
        if (obj['sigla'] == sigla) {
          filteredCourse = obj;
        }
      });
    });

    return filteredCourse;
  }

  getTotalCompleted() {
    let arrApproved = [];
    let arrPending = [];
    Data.map((course) => course.subjects).map(
      (sub) => {
        sub.filter((opt) => {
          if (opt.status == 'aprovado') {
            arrApproved.push(opt);
          } else {
            arrPending.push(opt);
          }
        });
      }
      // (sub) => sub['status'] == 'aprovado'
    );

    return {
      totalCursado: arrApproved.length,
      totalCursando: arrPending.length,
    };
  }

  setNewResult(sigla, nota) {
    Data.map((course) => course.subjects).map((sub) => {
      sub.map((opt) => {
        if (opt.sigla == sigla) {
          opt.nf = nota;
        }
      });
    });
  }
}
