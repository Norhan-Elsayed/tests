import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';




const routes: Routes = [

  // auth
  {
    path: '', loadComponent: () => import('./layouts/auth-layout/auth-layout.component')
      .then((m) => m.AuthLayoutComponent), children: [
        // home
        { path: '', redirectTo: 'home', pathMatch: 'full' },
        {
          path: 'home', loadComponent: () => import('./components/home/home.component')
            .then((m) => m.HomeComponent), title: 'Home'
        },
        // auth
        {
          path: 'login', loadComponent: () => import('./components/login/login.component')
            .then((m) => m.LoginComponent), title: 'Login'
        },
        {
          path: 'register', loadComponent: () => import('./components/register/register.component')
            .then((m) => m.RegisterComponent), title: 'Register'
        },
        // applay
        {
          path: 'applay', loadComponent: () => import('./components/applay/applay.component')
            .then((m) => m.ApplayComponent), title: 'Applay'

        },
      ]
  },


  // super admin
  {
    path: '',canActivate:[authGuard], loadComponent: () => import('./layouts/super-layout/super-layout.component')
      .then((m) => m.SuperLayoutComponent), children: [
        // dashboard super
        { path: '',  redirectTo: 'dashSuper', pathMatch: 'full' },
        {
          path: 'dashSuper', loadComponent: () => import('./components/dash-super/dash-super.component')
            .then((m) => m.DashSuperComponent), title: 'DashBoard'
        },
        // super information
        {
          path: 'superInfo', loadComponent: () => import('./components/super-info/super-info.component')
            .then((m) => m.SuperInfoComponent), title: 'Super Admin'
        },
        // managrs super
        {
          path: 'managers', loadComponent: () => import('./components/managers/managers.component')
            .then((m) => m.ManagersComponent), title: ' Managers'
        },
        {
          path: 'managerInfoSuper', loadComponent: () => import('./components/manager-info/manager-info.component')
            .then((m) => m.ManagerInfoComponent), title: 'Manager Details'
        },
        // admins super
        {
          path: 'adminsSuper', loadComponent: () => import('./components/admins/admins.component')
            .then((m) => m.AdminsComponent), title: 'Admins'
        },
        {
          path: 'adminsInfoSuper', loadComponent: () => import('./components/admin-info/admin-info.component')
            .then((m) => m.AdminInfoComponent), title: 'Admin Details'
        },
        // cars super
        {
          path: 'carsSuper', loadComponent: () => import('./components/cars/cars.component')
            .then((m) => m.CarsComponent), title: 'Cars'
        },
        {
          path: 'carInfoSuper', loadComponent: () => import('./components/car-info/car-info.component')
            .then((m) => m.CarInfoComponent), title: 'Car Details'
        },
        // drivers super
        {
          path: 'driversSuper', loadComponent: () => import('./components/drivers/drivers.component')
            .then((m) => m.DriversComponent), title: 'Drivers'
        },
        {
          path: 'driverInfoSuper', loadComponent: () => import('./components/driver-info/driver-info.component')
            .then((m) => m.DriverInfoComponent), title: 'Driver Details'
        },
        {
          path: 'violations', loadComponent: () => import('./components/violations/violations.component')
            .then((m) => m.ViolationsComponent), title: 'Violations'
        },
        // assistants super
        {
          path: 'assistSuper', loadComponent: () => import('./components/assistants/assistants.component')
            .then((m) => m.AssistantsComponent), title: 'Assistants'
        },
        {
          path: 'assistInfoSuper', loadComponent: () => import('./components/assist-info/assist-info.component')
            .then((m) => m.AssistInfoComponent), title: 'Assistant Details'
        }

      ]
  },

  // manager
  {
    path: '',canActivate:[authGuard], loadComponent: () => import('./layouts/manager-layout/manager-layout.component')
      .then((m) => m.ManagerLayoutComponent), children: [
        // dash board manager
        { path: '', redirectTo: 'dashManager', pathMatch: 'full' },
        {
          path: 'dashManager', loadComponent: () => import('./components/dash-manager/dash-manager.component')
            .then((m) => m.DashManagerComponent), title: 'DashBoard'
        },
        // manager information
        {
          path: 'managerInfo', loadComponent: () => import('./components/manager-info/manager-info.component')
            .then((m) => m.ManagerInfoComponent), title: 'Manager Details'
        },
        // admins
        {
          path: 'adminsManager', loadComponent: () => import('./components/admins/admins.component')
            .then((m) => m.AdminsComponent), title: 'Admins'
        },
        {
          path: 'adminInfoManager', loadComponent: () => import('./components/admin-info/admin-info.component')
            .then((m) => m.AdminInfoComponent), title: 'Admin Details'
        },
        // assistants
        {
          path: 'assistsManager', loadComponent: () => import('./components/assistants/assistants.component')
            .then((m) => m.AssistantsComponent), title: 'Assistants'
        },
        {
          path: 'assistInfoManager', loadComponent: () => import('./components/assist-info/assist-info.component')
            .then((m) => m.AssistInfoComponent), title: 'Assistant Details'
        },
        // cars
        {
          path: 'carsManager', loadComponent: () => import('./components/cars/cars.component')
            .then((m) => m.CarsComponent), title: 'Car Details'
        },

        {
          path: 'carInfoManager', loadComponent: () => import('./components/car-info/car-info.component')
            .then((m) => m.CarInfoComponent), title: 'Car Details'
        },
        // drivers
        {
          path: 'driversManager', loadComponent: () => import('./components/drivers/drivers.component')
            .then((m) => m.DriversComponent), title: 'Drivers'
        },
        {
          path: 'driverInfoManager', loadComponent: () => import('./components/driver-info/driver-info.component')
            .then((m) => m.DriverInfoComponent), title: 'Driver Details'
        },
        {
          path: 'violationsManager', loadComponent: () => import('./components/violations/violations.component')
            .then((m) => m.ViolationsComponent), title: 'Violations'
        }
      ]
  },

  // admin

  {
    path: '',canActivate:[authGuard], loadComponent: () => import('./layouts/admin-layout/admin-layout.component')
      .then((m) => m.AdminLayoutComponent), children: [
        // dash board
        { path: '', redirectTo: 'dashAdmin', pathMatch: 'full' },
        {
          path: 'dashAdmin', loadComponent: () => import('./components/dash-admin/dash-admin.component')
            .then((m) => m.DashAdminComponent), title: 'DashBoard'
        },
        // admin
        {
          path: 'adminInfoAdmin', loadComponent: () => import('./components/admin-info/admin-info.component')
            .then((m) => m.AdminInfoComponent), title: 'Admin Details'
        },

        // cars
        {
          path: 'carsAdmin', loadComponent: () => import('./components/cars/cars.component')
            .then((m) => m.CarsComponent), title: 'Cars'
        },
        {
          path: 'carInfoAdmin', loadComponent: () => import('./components/car-info/car-info.component')
            .then((m) => m.CarInfoComponent), title: 'Car Details'
        },
        // driver
        {
          path: 'driversAdmin', loadComponent: () => import('./components/drivers/drivers.component')
            .then((m) => m.DriversComponent), title: 'Drivers'
        },
        {
          path: 'driverInfoAdmin', loadComponent: () => import('./components/driver-info/driver-info.component')
            .then((m) => m.DriverInfoComponent), title: 'Driver Details'
        },

        // assistant
        {
          path: 'assistsAdmin', loadComponent: () => import('./components/assistants/assistants.component')
            .then((m) => m.AssistantsComponent), title: 'Assistants'
        },
        {
          path: 'assistInfoAdmin', loadComponent: () => import('./components/assist-info/assist-info.component')
            .then((m) => m.AssistInfoComponent), title: 'Assistant Details'
        }

      ]
  },

  // assistant

  {
    path: '',canActivate:[authGuard], loadComponent: () => import('./layouts/assist-layout/assist-layout.component')
      .then((m) => m.AssistLayoutComponent), children: [
        // dash board
        { path: '', redirectTo: 'assistantInfoASSIST', pathMatch: 'full' },
        {
          path: 'dashAssist', loadComponent: () => import('./components/dash-assist/dash-assist.component')
            .then((m) => m.DashAssistComponent), title: 'DashBoard'
        },
        // assistant
        {
          path: 'assistInfoAssist', loadComponent: () => import('./components/assist-info/assist-info.component')
            .then((m) => m.AssistInfoComponent), title: 'Assistant Details'
        },
        //  cars
        {
          path: 'carsAssist', loadComponent: () => import('./components/cars/cars.component')
            .then((m) => m.CarsComponent), title: 'Cars'
        },
        {
          path: 'carInfoAssist', loadComponent: () => import('./components/car-info/car-info.component')
            .then((m) => m.CarInfoComponent), title: 'Car Details'
        },
        // drivers
        {
          path: 'driversAssist', loadComponent: () => import('./components/drivers/drivers.component')
            .then((m) => m.DriversComponent), title: 'Drivers'
        },
        {
          path: 'driverInfoAssist', loadComponent: () => import('./components/driver-info/driver-info.component')
            .then((m) => m.DriverInfoComponent), title: 'Driver Details'
        }
      ]
  },

  // driver

  {
    path: '',canActivate:[authGuard], loadComponent: () => import('./layouts/deiver-layout/deiver-layout.component')
      .then((m) => m.DeiverLayoutComponent), children: [

        { path: '', redirectTo: 'driverInfoDriver', pathMatch: 'full' },
        {
          path: 'driverInfodriver', loadComponent: () => import('./components/driver-info/driver-info.component')
            .then((m) => m.DriverInfoComponent), title: 'About Driver'
        },

      ]
  },
     //add driver
  { path: 'add-driver' , loadComponent: () => import('./components/add-driver/add-driver.component')
  .then((m) => m.AddDriverComponent), title: 'Add Driver'
  },

  // notfound

  {
    path: '**', loadComponent: () => import('./components/notfound/notfound.component')
      .then((m) => m.NotfoundComponent), title: 'Not Found'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
