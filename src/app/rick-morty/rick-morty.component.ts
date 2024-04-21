import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { RickMortyService } from '../rick-morty.service';
import { RickMortyCharacter } from '../rick-morty';

import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';

@Component({
  selector: 'app-rick-morty',
  templateUrl: './rick-morty.component.html',
  styleUrls: ['./rick-morty.component.scss'],
  standalone: true,
  imports: [MatTableModule, MatPaginatorModule],
})
export class RickMortyComponent implements OnInit, OnDestroy {
  dataSource = new MatTableDataSource<RickMortyCharacter>();
  isLoading = true;
  currentPage = 1;
  totalPages = 0;
  displayedColumns: string[] = ['Imagen', 'Nombre', 'Creación', 'Acciones'];
  pageSizeOptions: number[] = [5, 10, 25, 50];
  pageSize = 5;
  allCharacters: RickMortyCharacter[] = [];
  currentDisplayedDataLength: number = 0;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  private subscription!: Subscription;
  private intervalId: number | undefined;

  constructor(private rickMortyService: RickMortyService) {}

  ngOnInit(): void {
    this.loadCharacters();
  }

  ngAfterViewInit(): void {
    if (this.paginator) {
      this.paginator.pageSize = this.pageSize;
      this.paginator.length = this.allCharacters.length;
    }
  }
  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  loadCharacters(): void {
    this.isLoading = true;
    this.rickMortyService
      .getCharacters()
      .subscribe((data: RickMortyCharacter[]) => {
        this.allCharacters = data;
        this.totalPages = Math.ceil(this.allCharacters.length / this.pageSize);
        this.dataSource.data = this.allCharacters.slice(0, this.pageSize);
        this.isLoading = false;
      });
  }

  handlePageSizeChange(event: any) {
    const previousFirstItemIndex = (this.currentPage - 1) * this.pageSize;
    const previousPageSize = this.pageSize;
    this.pageSize = event.pageSize;
    this.currentPage = Math.floor(previousFirstItemIndex / this.pageSize) + 1;
    this.totalPages = Math.ceil(this.allCharacters.length / this.pageSize);
    this.paginator.pageIndex = this.currentPage - 1;
    this.updateDisplayedData();
  }

  updateDisplayedData() {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.dataSource.data = this.allCharacters.slice(startIndex, endIndex);
  }
}
