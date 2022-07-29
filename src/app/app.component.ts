import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  Username: string = "Joaquim";

  Data = {
    email: "joaquim@email.com",
    telefone: "99908665"
  }

  title = 'curso-angular';
}
