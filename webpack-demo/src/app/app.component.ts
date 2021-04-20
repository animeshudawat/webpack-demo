import { Component } from '@angular/core';
import { css } from '@emotion/css';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'webpack-demo';
  changeColor() {
    const app = document.getElementById('button_with_css');
    const btnStyle = css`
      color: blue;
    `;
    app.classList.add(btnStyle);
  }
}
