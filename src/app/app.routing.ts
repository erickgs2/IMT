import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ComponentsComponent } from './components/components.component';
import { LandingComponent } from './examples/landing/landing.component';
import { LoginComponent } from './examples/login/login.component';
import { ProfileComponent } from './examples/profile/profile.component';
import { NucleoiconsComponent } from './components/nucleoicons/nucleoicons.component';

import { InicioComponent } from './pages/inicio/inicio.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { ProductoComponent } from './pages/producto/producto.component';

const routes: Routes =[
    { path: '', redirectTo: 'inicio', pathMatch: 'full' },
    { path: 'index',                component: LandingComponent },
    { path: 'inicio',               component: InicioComponent },
    { path: 'nosotros',             component: NosotrosComponent },
    { path: 'productos',            component: ProductosComponent },
    { path: 'producto/:id',         component: ProductoComponent },
    { path: 'contacto',             component: ContactoComponent },
    // { path: 'index',                component: ComponentsComponent },
    // { path: 'nucleoicons',          component: NucleoiconsComponent },
    // { path: 'examples/landing',     component: LandingComponent },
    // { path: 'examples/login',       component: LoginComponent },
    // { path: 'examples/profile',     component: ProfileComponent }
];

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        RouterModule.forRoot(routes)
    ],
    exports: [
        HttpClientModule
    ],
})
export class AppRoutingModule { }
