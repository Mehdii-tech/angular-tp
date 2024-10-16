import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryService } from '../shared/services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  categories: any[] = []; // Toutes les catégories
  filteredCategories: any[] = []; // Catégories filtrées
  searchTerm: string = ''; // Terme de recherche

  constructor(private categoryService: CategoryService, private router: Router) {}

  ngOnInit(): void {
    // Récupérer les catégories depuis le service
    this.categoryService.getCategories().subscribe((data: any) => {
      this.categories = data;
      this.filteredCategories = this.categories; // Initialement, toutes les catégories sont affichées

    });
  }

  // Filtrer les catégories en fonction du terme de recherche lorsqu'on clique sur "Rechercher"
  filterCategories() {
    this.filteredCategories = this.categories.filter(category =>
      category.categoryTitle.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  // Réinitialiser le filtre
  resetFilter() {
    this.searchTerm = '';
    this.filteredCategories = this.categories;
  }

  // Naviguer vers la page du quiz en passant l'ID de la catégorie
  navigateToQuiz(id: number) {
    this.router.navigate(['/quiz', id]);
  }
}
