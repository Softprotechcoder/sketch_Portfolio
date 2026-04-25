import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [CommonModule, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  readonly services = [
    {
      title: 'Soft-copy sketch',
      copy: 'A warm graphite-style portrait prepared digitally and delivered as a soft copy at no cost.',
    },
    {
      title: 'Queue token',
      copy: 'Every upload receives a token ID so the request feels clear, trackable, and respectful.',
    },
    {
      title: 'Reference-first process',
      copy: 'Share expression notes, crop ideas, and delivery details with the uploaded picture.',
    },
  ];

  readonly featuredSketches = [
    { title: 'Quiet Smile', type: 'Portrait study', tone: 'Graphite and soft paper grain' },
    { title: 'Festival Eyes', type: 'Expressive face', tone: 'Charcoal depth with warm highlights' },
    { title: 'Family Frame', type: 'Memory sketch', tone: 'Gentle lines and heirloom mood' },
  ];

  readonly reelCards = [
    { title: 'Before the first line', metric: '15s reel', copy: 'Reference photo to rough gesture marks.' },
    { title: 'Graphite shadows', metric: '22s reel', copy: 'Building cheek, hair, and eye depth.' },
    { title: 'Final reveal', metric: '18s reel', copy: 'Soft-copy export and delivery moment.' },
  ];

  readonly process = ['Upload picture', 'Receive token', 'Sketch enters queue', 'Soft copy delivered'];
}
