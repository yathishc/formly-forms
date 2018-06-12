import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';
import { CuiInputComponent, CuiSelectComponent} from "@cisco-ngx/cui-components";

@Component({
 selector: 'formly-select',
 template: `              
  
      <cui-select [items]="to.options" label="{{to.label}}"  [formControl]="formControl" [formlyAttributes]="field" required="{{to.required}}"></cui-select>
    
             
 `,
 styleUrls: ['./components.style.scss']
})
export class FormlySelect extends FieldType {}