import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AppBuilderComponent } from '@infragistics/appbuilder-sdk';
import { IGX_NAVBAR_DIRECTIVES, IgxAvatarComponent, IgxButtonDirective, IgxOverlayOutletDirective, IgxRippleDirective, IgxToggleActionDirective, IgxToggleDirective } from 'igniteui-angular';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AppBuilderComponent, IGX_NAVBAR_DIRECTIVES, IgxToggleActionDirective, IgxOverlayOutletDirective, IgxAvatarComponent, IgxButtonDirective, IgxRippleDirective, IgxToggleDirective, RouterLink, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {}
