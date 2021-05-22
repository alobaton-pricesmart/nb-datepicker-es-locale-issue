import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'nb-datepicker-es-locale-issue';
  form: FormGroup;
  isForm: Promise<any>;
  nbDatepickerFormControl: FormControl;
  nbRangepickerFormControl: FormControl;

  constructor(private readonly formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.isForm = Promise.resolve(
      this.form = this.formBuilder.group({
        formControl: new FormControl()
      }));

    this.nbDatepickerFormControl = new FormControl();
    this.nbRangepickerFormControl = new FormControl();
  }

  onSubmit() {
    alert(this.form.value.formControl);
  }

  getStatus(formControl: FormControl): string {
    return formControl.dirty || formControl.touched ?
      (formControl.invalid ? 'danger' : 'success') : '';
  }
}
