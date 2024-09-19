import { CommonModule } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppBuilderComponent } from '@infragistics/appbuilder-sdk';

@Component({
  selector: 'app-app-builder',
  standalone: true,
  imports: [CommonModule, RouterOutlet, AppBuilderComponent],
  templateUrl: './app-builder.component.html',
  styleUrls: ['./app-builder.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom,

})
export class AppBuilderComponent1 {}
