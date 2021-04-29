import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomepageModuleComponent } from './homepage-module.component';
import { BigbannerComponent } from './bigbanner/bigbanner.component';
import { SmallbannerComponent } from './smallbanner/smallbanner.component';


@NgModule({
  declarations: [
    HomepageModuleComponent,
    BigbannerComponent,
    SmallbannerComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HomepageModule { }
