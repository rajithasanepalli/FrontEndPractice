import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, RouteConfigLoadStart, Router } from '@angular/router';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.scss']
})
export class StudentDetailsComponent implements OnInit {
  public students: any = [];
  errorMsg: any;
  selectedId: any;
  constructor(private _stdService: StudentService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((param: ParamMap) => {
      let stdId = param.get('id');
      this.selectedId = stdId;
    })
    this._stdService.getStudentdSata().subscribe(result =>
      this.students = result,
      (error: any) => {
        this.errorMsg = error
      }
    )
  }
  selectChange(x: any) {
    this.router.navigate(['/student', x.id])


  }
  isSelected(x: any) {
    return x.id == this.selectedId;
  }
}
