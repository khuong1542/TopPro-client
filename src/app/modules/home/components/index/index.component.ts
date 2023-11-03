import { Component } from '@angular/core';

declare var particlesJS: any;

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent {
  public ngOnInit(): void {
    particlesJS.load('particles-js', '../../../../../assets/js/particles.json', null);
  }
}
