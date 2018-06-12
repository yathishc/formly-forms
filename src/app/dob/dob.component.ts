import { Component, ViewChild } from '@angular/core';
import { CuiInputComponent } from "@cisco-ngx/cui-components";
import { FormGroup, FormArray, FormControl } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

//import {FormlyFieldConfig} from '@ngx-formly/core';
import { Router, RouterLink } from "@angular/router";
import { CuiHeaderOptions, CuiLabelsComponent, CuiButtonComponent, CUI_DIALOG_DATA,
  CuiDialogRef, CuiDialogService, CuiInputOptions, CuiStepsComponent } from "@cisco-ngx/cui-components";


// Formly JSON Model 
export interface StepType {
  label: string;
  number: string;
  fields: FormlyFieldConfig[];
}


@Component({
  selector: 'app-dob',
  templateUrl: './dob.component.html',
  styleUrls: ['./dob.component.css']
})
export class DobComponent  {

  @ViewChild("workflowWidget") workflowWidget: CuiStepsComponent;
  
  activedStep = 0;
  model = {
      SysProps: [{}]
  };
  options: FormlyFormOptions = {};
  currentStep: number = 0;

  fields: FormlyFieldConfig[];  

  // Cisco Elements Config
  steps: any = [
    {
       label: 'Description',
       number: "1",
       active: true,
       visited: false,
       fieldGroupClassName: 'form-group__text',
       fields: [ 
           {
           key: 'connectorName',
           type: 'input',
           templateOptions: {
               type: 'text',
               label:'Connector Name',
               required: true,
           },
           
       },
           {
             key: 'releaseNumber',
             type: 'input',
             templateOptions: {
               type: 'text',
               label: 'Release Number',
               required: false,
             },

           },
           {
               key: 'tags',
               type: 'select',
               templateOptions: {
                 label: 'Tags',
                 options: [
                   { name: '123Tag', value: '123tag' },
                   { name: 'CLI', value: 'cli' },
                   { name: 'test', value: 'test' },
                   { name: 'test tag', value: 'testTag' },
                 ],
                 required:true,
               },
             },

          
       ],
   },
   {
       label: 'Dest DR',
       number: "2",
       visited: true,
       fieldGroupClassName: 'form-group__text',
       fields: [ 
           {
               key: 'tags',
               type: 'select',
               templateOptions: {
                 label: 'Tags',
                 options: [
                   { name: '123Tag', value: '123tag' },
                   { name: 'CLI', value: 'cli' },
                   { name: 'test', value: 'test' },
                   { name: 'test tag', value: 'testTag' },
                 ],
                 required:true,
               },
             },
           {
             key: 'host',
             type: 'input',
             templateOptions: {
               type: 'text',
               label: 'Host',
               required: false,
             },

           },
           {
               key: 'port',
               type: 'input',
               templateOptions: {
                 type: 'text',
                 label: 'Port',
                 required: false,
               },

           },
           {
               key: 'userName',
               type: 'input',
               templateOptions: {
                 type: 'text',
                 label: 'User Name',
                 required: false,
               },

           },
           {
               key: 'password',
               type: 'input',
               templateOptions: {
                 type: 'text',
                 label: 'Password',
                 required: false,
               },

           },
           
           

          
       ],
   },
   {
       label: 'Source Layout',
       number: "3",
       visited: true,
       fields: [
           {
               key: 'SysProps',
               type: 'repeat',
               fieldArray: {
                 fieldGroupClassName: 'row',
                 templateOptions: {
                   btnText: 'Add',
                 },
                 fieldGroup: [
                  
                   {
                       key: 'messageLayout',
                       className: 'flex-2 ',
                       type: 'select',
                       templateOptions: {
                         label: 'Message Layout',
                         options: [
                           { name: 'Msg1', value: '123tag' },
                           { name: 'Msg2', value: 'cli' },
                           { name: 'Msg3', value: 'test' },
                           { name: 'Msg4', value: 'testTag' },
                         ],
                         required:false,
                       },
                     },
                   
                   {
                     type: 'input',
                     key: 'symbolic',
                     className: 'flex-2 ',
                     templateOptions: {
                       label: 'Symbolic',
                       addonRight: {
                         class: 'fa fa-code',
                         onClick: (to, fieldType, $event) => console.log(to, fieldType, $event),
                       },
                     },
                   },
                 ],
               },
             },
       ],
   },
   {
       label: 'Step3',
       number: "3",
       class: "step__icon--success",
       visited: false,
       fields: [
          
           {   
               key: 'eOutput',
               className: 'input__margin',
               type: 'text',
               templateOptions: {
                   label: 'Expected Output',
                   placeholder: '',
                   rows: 3,
                   required: true,
               },
           },
       ],
   },
];
 stepPositionIndex = 0;
inputOptions = 
{
   "helperLevel": "info",
   "min": 0,
   "max": 100,
   "step": 5,
   "rows": 5,
   "autofocus": true,
   "minLength": 0,
   "maxLength": 100,
   "errorMessages": [
     {
       "type": 1
     },
     {
       "type": 3,
       "message": "A valid email is required."
     }
   ],
   "required": false,
   "helperText": "",
   "leftIcon": "icon-grid-view",
   "rightIcon": "icon-list-view",
   "match": null
 }
  
  

 
  
      constructor(private _router:Router) {  }
  
     
      ngOnInit() {
            // server provided  
          this.stepPositionIndex = 0;
      }

      form = new FormArray(this.steps.map(() => new FormGroup({})));
      
          prevStep(step: any) {
              this.currentStep = step - 1;
              this.activedStep = step - 1;
              this.workflowWidget.steps[this.stepPositionIndex].active = false;
              this.workflowWidget.steps[this.stepPositionIndex].visited = false;
              // ===========
              this.workflowWidget.steps[--this.stepPositionIndex].active = true;
              this.workflowWidget.steps[this.stepPositionIndex].visited = false;
          }
      
      
          nextStep(step: any) {
              this.currentStep = step + 1;
              this.activedStep = step + 1;
              this.workflowWidget.steps[this.stepPositionIndex].active = false;
              this.workflowWidget.steps[this.stepPositionIndex].visited = true;
              // ===========
              this.workflowWidget.steps[++this.stepPositionIndex].active = true;
              this.workflowWidget.steps[this.stepPositionIndex].visited = false;
              
          }
      
  
      onSubmit() {
          console.log("server --->", this.form);
      }

}
