import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about',
  imports: [CommonModule, RouterLink],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {
  readonly notes = [
    'Free soft-copy sketch service for the current portfolio launch.',
    'Delivery details are collected so the final sketch can be sent clearly.',
    'Uploaded photos stay local in this v1 and prepare the flow for a future backend.',
  ];

}
