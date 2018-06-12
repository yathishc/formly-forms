import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';
import { CuiInputComponent } from "@cisco-ngx/cui-components";

@Component({
 selector: 'formly-textarea',
 template: `
     
     <cui-input type="textarea" [(model)]="myModel" [options]="inputOptions" label="Input a value" [formControl]="formControl" [formlyAttributes]="field"></cui-input>
     
 `,
})
export class FormlyTextarea extends FieldType {

    inputOptions =[
        {
          "helperLevel": "info",
          "min": 1,
          "max": 100,
          "step": 5,
          "rows": 5,
          "autofocus": false,
          "minLength": 0,
          "maxLength": 100,
          "errorMessages": [
            {
              "type": 1,
              "message":"Not a valid input."
            },
            {
              "type": 3,
              "message": "A valid email is required."
            }
          ],
         
          "helperText": "",
          "leftIcon": "icon-grid-view",
          "rightIcon": "icon-list-view",
          "match": null
        
      }
    ]
}