import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  imports: [CommonModule],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.scss',
})
export class Portfolio {
  readonly categories = ['All', 'Portrait', 'Family', 'Couple', 'Study'];
  selectedCategory = 'All';

  readonly sketches = [
    {
      title: 'Morning Portrait',
      category: 'Portrait',
      description: 'Soft expression study with feathered graphite shading.',
    },
    {
      title: 'Sister Frame',
      category: 'Family',
      description: 'Two-face memory sketch with warm paper contrast.',
    },
    {
      title: 'Together Lines',
      category: 'Couple',
      description: 'A gentle paired portrait with shared focal light.',
    },
    {
      title: 'Eye Study',
      category: 'Study',
      description: 'Focused detail practice for eyelashes and reflected light.',
    },
    {
      title: 'Classic Smile',
      category: 'Portrait',
      description: 'Clean front-facing sketch made for soft-copy delivery.',
    },
    {
      title: 'Heirloom Group',
      category: 'Family',
      description: 'Layered composition for a small family reference.',
    },
  ];

  get filteredSketches() {
    if (this.selectedCategory === 'All') {
      return this.sketches;
    }

    return this.sketches.filter((sketch) => sketch.category === this.selectedCategory);
  }

  selectCategory(category: string): void {
    this.selectedCategory = category;
  }
}
