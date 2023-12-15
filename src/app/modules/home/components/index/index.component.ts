import { Component } from '@angular/core';
import { ParticlesConfig } from './particles-config';

declare var particlesJS: any;

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent {

  public ngOnInit(): void {
    particlesJS('particles-js', ParticlesConfig);
  }

}
