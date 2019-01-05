import { NgModule } from '@angular/core';

import { SqlServerApplicationSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [SqlServerApplicationSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [SqlServerApplicationSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class SqlServerApplicationSharedCommonModule {}
