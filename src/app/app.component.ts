import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RickMortyComponent } from './rick-morty/rick-morty.component';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { DatePipe } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RickMortyComponent,
    MatTableModule,
    FooterComponent,
    HeaderComponent
    
  ],
  providers:[
    DatePipe
  ],
  
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'rick-morty-f';
}
