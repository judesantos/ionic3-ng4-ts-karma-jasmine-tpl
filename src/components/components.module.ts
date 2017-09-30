import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';

import { AccordionComponent } from './accordion/accordion';
import { SidebarComponent } from './sidebar/sidebar';
import { SubmenuComponent } from './submenu/submenu';
import { MainviewComponent } from './mainview/mainview';

@NgModule({
	imports: [IonicModule],
	declarations: [
    AccordionComponent,
    SidebarComponent,
    SubmenuComponent,
    MainviewComponent],
	exports: [
    AccordionComponent,
    SidebarComponent,
    SubmenuComponent,
    MainviewComponent]
})
export class ComponentsModule {}
