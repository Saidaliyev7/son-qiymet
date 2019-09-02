import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScheduleComponent } from './schedule.component';
import { HeaderModule } from './header/header.module';
import { ContentModule } from './content/content.module';

@NgModule({
    declarations: [ScheduleComponent],
    imports: [ CommonModule,HeaderModule,ContentModule ],
    exports: [ScheduleComponent],
    providers: [],
})
export class ScheduleModule {}