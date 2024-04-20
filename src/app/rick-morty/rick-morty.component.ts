import { Component, OnInit, ViewChild } from "@angular/core";
import { Subscription } from "rxjs";
import { RickMortyService } from "../rick-morty.service";
import { RickMorty, RickMortyCharacter } from "../rick-morty";

import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from "@angular/material/paginator";



@Component({
  selector: 'app-rick-morty',
  templateUrl: './rick-morty.component.html',
  styleUrls: ['./rick-morty.component.scss'],
  standalone:true,
  imports: [MatTableModule, MatPaginatorModule],
})
export class RickMortyComponent implements OnInit  {
  
  dataSource = new MatTableDataSource<RickMortyCharacter>();
  isLoading = true;
  currentPage = 1;
  totalPages = 0;
  displayedColumns: string[] = ['Imagen', 'Nombre', 'Creación', 'Acciones'];
  pageSizeOptions: number[] = [5, 10, 25, 50];
  rickMortyCharacters!:RickMortyCharacter;
  
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  private subscription!: Subscription;
  constructor(private rickMortyService: RickMortyService) {}

  ngOnInit(): void {
    this.loadCharacters();
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe(); // Unsubscribe to prevent memory leaks
  }

  loadCharacters(): void {
    this.isLoading = true;
    this.subscription = this.rickMortyService.getCharacters()
      .subscribe((data:any) => {

       
          this.dataSource.data=data;
          this.dataSource.paginator = this.paginator; // Seteamos el paginador
      this.isLoading = false;
          
        });
            
        
    
      
  }

 
}
