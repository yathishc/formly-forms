import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormArray, FormControl } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { CuiHeaderOptions, CuiLabelsComponent, CuiButtonComponent, CUI_DIALOG_DATA,
  CuiDialogRef, CuiDialogService, CuiInputOptions, CuiStepsComponent } from "@cisco-ngx/cui-components";

// Formly JSON Model 
export interface StepType {
  label: string;
  number: string;
  fields: FormlyFieldConfig[];
}


@Component({
  selector: 'app-msg-layout',
  templateUrl: './msg-layout.component.html',
  styleUrls: ['./msg-layout.component.css']
})
export class MsgLayoutComponent implements OnInit {
  //@ViewChild("workflowWidget") workflowWidget: CuiStepsComponent;
  
  activedStep = 0;
  model = {
      SysProps: [{}]
  };
  options: FormlyFormOptions = {};
  currentStep: number = 0;
  stepPositionIndex = 0;
  constructor() { }

  ngOnInit() {
  }
  fields: FormlyFieldConfig[];  

  steps: any = [
    {
       label: 'Description',
       number: "1",
       active: true,
       visited: false,
       fieldGroupClassName: 'display-flex',
       fields: [ 
           {
           key: 'messageLayoutName',
           type: 'input',
           className: 'flex-1',
           templateOptions: {
               type: 'text',
               label:'Message Layout Name',
               required: true,
           },           
       },
           {
               key: 'layoutType',
               type: 'selectAdd',
               templateOptions: {
                 label: 'Message Layout Type',
                 options: [
                   { name: '123Tag', value: '123tag' },
                   { name: 'CLI', value: 'cli' },
                   { name: 'test', value: 'test' },
                   { name: 'test tag', value: 'testTag' },
                 ],
                 required:false,
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
                       className: 'col-sm-4',
                       type: 'select',
                       templateOptions: {
                         label: 'Message Layout',
                         options: [
                           { name: 'Msg1', value: '123tag' },
                           { name: 'Msg2', value: 'cli' },
                           { name: 'Msg3', value: 'test' },
                           { name: 'Msg4', value: 'testTag' },
                         ],
                         required:true,
                       },
                     },
                   
                   {
                     type: 'input',
                     key: 'symbolic',
                     className: 'col-sm-4',
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
]


//Form elements CUI 

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
