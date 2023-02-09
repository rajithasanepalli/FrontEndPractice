import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit {

  public students: any = [];
  errorMsg: any;
  studentId: any;
  selectedId: any;
  constructor(private _stdService: StudentService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    // let stdId = this.activatedRoute.snapshot.paramMap.get('id');
    // this.studentId = stdId;
    this.activatedRoute.paramMap.subscribe((param: Params) => {
      let id = parseInt(param.get('id'))
      this.studentId = id;
    })
    this._stdService.getStudentdSata().subscribe(result => {
      this.students = result,
        (error: any) => {
          this.errorMsg = error;
        }
    })


  }
  toPrevious() {

    let previousId = this.studentId - 1;
    this.router.navigate(['/student', previousId])
  }
  toNext() {
    let nextId = this.studentId + 1;
    this.router.navigate(['/student', nextId])

  }
  toBack() {
    this.selectedId = this.studentId;
    this.router.navigate(['/student-details', { id: this.selectedId }])
  }
  fee() {
    this.router.navigate(['course-fee'], { relativeTo: this.activatedRoute })
  }
}
