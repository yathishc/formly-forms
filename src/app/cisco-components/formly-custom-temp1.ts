import { Component } from '@angular/core';
import { FieldArrayType, FormlyFormBuilder } from '@ngx-formly/core';

@Component({
  selector: 'formly-repeat-section',
  template: `
    <div *ngFor="let field of field.fieldGroup; let i = index;">
      <formly-group
        [model]="model[i]"
        [field]="field"
        [options]="options"
        [form]="formControl">
        <div class="col-sm-2 d-flex align-items-center">
        
          <img class="add-row" (click)="remove(i)" src="/assets/cancel.png">
        </div>
      </formly-group>
    </div>
    <div >
     
      <img class="add-row" (click)="add()" src="/assets/create.png">
    </div>
  `,
  styleUrls: ['./components.style.scss']
})
export class RepeatTypeComponent extends FieldArrayType {
  constructor(builder: FormlyFormBuilder) {
    super(builder);
  }
}
