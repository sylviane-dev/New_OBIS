import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import{LayoutRoutingModule} from './layout-routing.module';
//import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import {FormsModule,ReactiveFormsModule} from '@angular/forms';
//SERVICES
import{AuthenticationGuardService} from '../shared/guards/authentication-guard.service';

 
//COMPONENTS
import { LayoutComponent } from './layout.component';
import { FooterComponent } from '../shared/components/footer/footer.component';
import { UiThemeSettingComponent } from '../shared/components/ui-theme-setting/ui-theme-setting.component';
import { DrawerWrapperComponent } from '../shared/components/drawer-wrapper/drawer-wrapper.component';
import { AdministrationComponent } from './administration/administration.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { AuditUserComponent } from './audit-user/audit-user.component';
import { AddUserComponent } from './add-user/add-user.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {AdminSideBarComponent} from '../shared/components/admin-side-bar/admin-side-bar.component';
 import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatSortModule } from '@angular/material/sort';
import { MatButtonModule } from '@angular/material/button';
import { AdminHeaderComponent } from '../shared/components/admin-header/admin-header.component';
import {MatInputModule} from '@angular/material/input';
import { UserprofilComponent } from '../shared/components/userprofil/userprofil.component';
import { ProfilHeaderComponent } from '../shared/components/profil-header/profil-header.component';
import { ProfilSideBarComponent } from '../shared/components/profil-side-bar/profil-side-bar.component';

@NgModule({
  declarations: [
    LayoutComponent,
    FooterComponent,
    UiThemeSettingComponent,
    DrawerWrapperComponent,
    AdministrationComponent,
    AuditUserComponent,
    AddUserComponent,
    AdminSideBarComponent,
    AdminHeaderComponent,
    UserprofilComponent,
    ProfilHeaderComponent,
    ProfilSideBarComponent,
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgMultiSelectDropDownModule.forRoot(),
    MatPaginatorModule,
    MatTableModule,
    MatTooltipModule,
    MatButtonModule,
    MatNativeDateModule,
    MatRippleModule,
    MatSelectModule,
    MatSortModule,
    MatTableModule,
    MatTooltipModule,
    MatInputModule,


    
  ],
  exports:[
    LayoutComponent
  ],
  providers:[
    AuthenticationGuardService
  ],
  schemas:[
    CUSTOM_ELEMENTS_SCHEMA
  ]

})
export class LayoutModule { }
