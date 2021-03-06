import { NgModule } from '@angular/core';
import { BrowserModule} from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';

// App Root
import { AppComponent} from './app.component';
import { NavbarComponent} from './navbar/navbar.component';
import { VerticalNavbarComponent } from './navbar/vertical.navbar.component';

// Feature Component
import { PersonalComponent } from './personal/personal.component';
import { WorkComponent} from './work/work.component';
import { AddressComponent} from './address/address.component';
import { ResultComponent} from './result/result.component';

// nested feateure compnents
import { DiscoveryComponent} from './discovery/discovery.component';
import { GapComponent} from './gap/gap.component';

// Routing Module
import { AppRoutingModule} from './app-routing.module';

// Shared Service
import { FormDataService} from './data/formData.service';

@NgModule({
imports: [
  BrowserModule,
  FormsModule,
  AppRoutingModule
],
providers: [{ provide: FormDataService, useClass: FormDataService}],
declarations: [ AppComponent, VerticalNavbarComponent, NavbarComponent, PersonalComponent, WorkComponent, AddressComponent, ResultComponent, DiscoveryComponent, GapComponent],
bootstrap: [ AppComponent]
})

export class AppModule { }
