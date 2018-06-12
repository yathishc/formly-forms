import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';

import { FormlyBootstrapModule } from "@ngx-formly/bootstrap";
import { FormlyModule } from "@ngx-formly/core";
//import {FormlyBootstrapModule} from '@ngx-formly/bootstrap';
import { CuiSearchModule, CuiButtonModule,  
  CuiInputModule,
  CuiStepsModule, CuiSelectModule, CuiHeaderModule,
  CuiLabelsModule,     
  CuiRatingModule, 
   CuiSortModule,
 CuiTreeModule  } from "@cisco-ngx/cui-components";
  import { NgUploaderModule } from 'ngx-uploader';

import { AppComponent } from './app.component';
import { FormlyFieldInput } from './formly-field-inputs'
import { FormlyChipss } from './cisco-components/formly-chips';
import { FormlyDropdown } from './cisco-components/formly-dropdown';
import { RepeatTypeComponent } from './cisco-components/formly-custom-temp1'
import { FormlyTextarea } from './cisco-components/formly-txtarea';
import { DobComponent } from './dob/dob.component';
import { AppRoutingModule }     from './app.route.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DatasetComponent } from './dataset/dataset.component';
import { MsgLayoutComponent } from './msg-layout/msg-layout.component';
import { FormlySelect } from './cisco-components/formlt-select';

@NgModule({
  declarations: [
    AppComponent,
    FormlyFieldInput,
    FormlyChipss,
    FormlyDropdown,
    FormlySelect,
    RepeatTypeComponent,
    FormlyTextarea,
    DobComponent,
    DashboardComponent,
    DatasetComponent,
    MsgLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormlyModule.forRoot({
      types: [
        { name: 'input', component: FormlyFieldInput },
        { name: 'chipss', component: FormlyChipss },
        { name: 'selectAdd', component: FormlyDropdown },
        { name: 'repeat', component: RepeatTypeComponent},
        { name: 'select', component: FormlySelect}
      ],
    }),
    //FormlyBootstrapModule,
    CuiSearchModule,
    CuiButtonModule,
    CuiStepsModule,
    CuiInputModule,
    CuiSelectModule,
    CuiHeaderModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
