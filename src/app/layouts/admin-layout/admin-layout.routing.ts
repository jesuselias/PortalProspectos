import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { UserComponent } from '../../pages/user/user.component';
import { TableComponent } from '../../pages/table/table.component';
import { TypographyComponent } from '../../pages/typography/typography.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { NotificationsComponent } from '../../pages/notifications/notifications.component';
import { UpgradeComponent } from '../../pages/upgrade/upgrade.component';
import { HardwareComponent } from '../../pages/hardware/hardware.component';
import { SoftwareComponent } from '../../pages/software/software.component';
import { AssignmentComponent } from '../../pages/assignment/assignment.component';
import {LevelComponent} from '../../pages/level/level.component';
import {TechnologyComponent} from '../../pages/technology/technology.component';
import {ActivityComponent} from '../../pages/activity/activity.component';
export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'user', component: UserComponent },
    { path: 'table', component: TableComponent },
    { path: 'typography', component: TypographyComponent },
    { path: 'icons', component: IconsComponent },
    { path: 'maps', component: MapsComponent },
    { path: 'notifications', component: NotificationsComponent },
    { path: 'upgrade', component: UpgradeComponent },
    { path: 'hardware', component: HardwareComponent },
    { path: 'software', component: SoftwareComponent },
    { path: 'assignment', component: AssignmentComponent },
    { path: 'level', component: LevelComponent },
    { path: 'technology', component: TechnologyComponent },
    { path: 'activity', component: ActivityComponent }
];
