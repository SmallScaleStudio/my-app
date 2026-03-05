import { Component } from '@angular/core';
import { InterpolationComponent } from '../interpolation/interpolation.component';
import { EventBindingComponent } from '../event-binding/event-binding.component';
import { PropertyBindingComponent } from '../property-binding/property-binding.component';
import { TwoWayBindingComponent } from '../two-way-binding/two-way-binding.component';



@Component({
  selector: 'app-interpolation-data-binding',
  templateUrl: './interpolation-data-binding.component.html',
  styleUrls: ['./interpolation-data-binding.component.css'],
  standalone: true,
  imports: [InterpolationComponent, EventBindingComponent, PropertyBindingComponent, TwoWayBindingComponent]
})
export class InterpolationDataBindingComponent {}