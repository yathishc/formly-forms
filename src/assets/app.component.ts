import { Component, ViewChild } from '@angular/core';
import { CuiSearchComponent, CuiButtonComponent, CuiStepsComponent } from "@cisco-ngx/cui-components";
import { CuiInputComponent } from "@cisco-ngx/cui-components";
import { FormGroup, FormArray, FormControl } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
//import {FormlyFieldConfig} from '@ngx-formly/core';

// Formly JSON Model 
export interface StepType {
  label: string;
  number: string;
  fields: FormlyFieldConfig[];
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild("workflowWidget") workflowWidget: CuiStepsComponent;
  
  activedStep = 0;
  model = {};
  options: FormlyFormOptions = {};
  currentStep: number = 0;

  // provisioned
  fields: FormlyFieldConfig[];  
  
    steps: any = [
        {
            label: 'Properties',
            number: "1",
            active: true,
            visited: false,
            fieldGroupClassName: 'form-group__text',
            fields: [ 
                {
                key: 'Node Name',
                type: 'input',
                templateOptions: {
                    type: 'text',
                    label:'Node Name',
                    required: true,
                },
                
            },
                {
                  key: 'Control Gateway IP',
                  type: 'input',
                  templateOptions: {
                    type: 'text',
                    label: 'Control Gateway IP',
                    required: false,
                  },

                },
                {
                    key: 'nodeType',
                    type: 'select',
                    templateOptions: {
                      label: 'Node Type',
                      options: [
                        { name: 'Cloud', value: 'cloud' },
                        { name: 'On-Perm', value: 'on-perm' },
                        { name: 'Fog', value: 'fog' },
                        { name: 'Edge', value: 'edge' },
                      ],
                      required:true,
                    },
                  },

                {
                    key: 'Data Gateway IP',
                    type: 'input',
                    templateOptions: {
                        type: 'text',
                        label: 'Data Gateway IP',
                        required: false,
                    },
                },
                {
                    key: 'Bulk Gateway IP',
                    type: 'input',
                    templateOptions: {
                        type: 'text',
                        label: 'Bulk Gateway IP',
                        required: false,
                    },
                },
                {
                    key: 'Node Admin Email',
                    type: 'input',
                    templateOptions: {
                        type: 'text',
                        label: 'Node Admin Email',
                        required: false,
                    },
                },
            ],
        },
        {
            label: 'Messaging',
            number: "2",
            visited: true,
            fields: [
                {
                    key: 'investments',
                    type: 'repeat',
                    fieldArray: {
                      fieldGroupClassName: 'row',
                      templateOptions: {
                        btnText: 'Add another investment',
                      },
                      fieldGroup: [
                        {
                          className: 'col-sm-3',
                          type: 'input',
                          key: 'investmentName',
                          templateOptions: {
                            label: 'Name of Investment:',
                            required: true,
                          },
                        },
                        {
                          type: 'input',
                          key: 'investmentDate',
                          className: 'col-sm-3',
                          templateOptions: {
                            type: 'date',
                            label: 'Date of Investment:',
                          },
                        },
                        {
                          type: 'input',
                          key: 'stockIdentifier',
                          className: 'col-sm-3',
                          templateOptions: {
                            label: 'Stock Identifier:',
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
  
      constructor() {  }
  
     
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