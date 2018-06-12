import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';
import { CuiInputComponent, CuiSelectComponent} from "@cisco-ngx/cui-components";

@Component({
 selector: 'formly-dropdown',
 template: `              
         
   <p class="add-new">
      <cui-select [items]="to.options" label="{{to.label}}"  [formControl]="formControl" [formlyAttributes]="field" required="{{to.required}}"class="cui-select"></cui-select>
      <span class="icon-add-contain icon-medium"></span>
   </p>
             
 `,
 styleUrls: ['./components.style.scss']
})
export class FormlyDropdown extends FieldType {}