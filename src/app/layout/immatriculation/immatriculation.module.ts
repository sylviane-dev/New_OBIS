import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import{ImmatriculationRoutingModule} from './immatriculation-routing.module';
import { FullCalendarModule } from '@fullcalendar/angular';
import {DateAdapter, MatNativeDateModule, MatRippleModule, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';

import { MAT_MOMENT_DATE_ADAPTER_OPTIONS, MAT_MOMENT_DATE_FORMATS, MomentDateAdapter } from '@angular/material-moment-adapter';

import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';

//COMPONENTS
import { ImmatriculationComponent } from './immatriculation.component';
import { MenuImmatriculationComponent } from './menu-immatriculation/menu-immatriculation.component';
import { HeaderComponent } from 'src/app/shared/components/header/header.component';
import { SideBarComponent } from 'src/app/shared/components/side-bar/side-bar.component';
import { ImmaPathService } from 'src/app/shared/services/immatriculation/imma-path.service';
import { DimensionsService } from 'src/app/shared/services/immatriculation/dimensions.service';
import { MatDatepickerModule } from '@angular/material/datepicker';



FullCalendarModule.registerPlugins([ // register FullCalendar plugins
  dayGridPlugin,
  interactionPlugin
]);


@NgModule({
  declarations: [
    ImmatriculationComponent,
    MenuImmatriculationComponent,
    HeaderComponent,
    SideBarComponent,
  ],
  imports: [
    CommonModule,
    FormsModule, 
    ReactiveFormsModule,
    ImmatriculationRoutingModule,
    FullCalendarModule,
    MatDatepickerModule,
    MatNativeDateModule,
    
  ],
  exports:[
    ImmatriculationComponent
  ],
  providers:[
    {provide: MAT_DATE_LOCALE,useValue: 'fr-FR'},
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE,MAT_MOMENT_DATE_ADAPTER_OPTIONS]
   },
   {provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS}
   
  ],
  schemas:[
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class ImmatriculationModule { }
