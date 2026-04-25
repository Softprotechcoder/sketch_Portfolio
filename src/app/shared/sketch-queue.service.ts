import { Injectable } from '@angular/core';

import { SketchRequest, SketchRequestInput } from './sketch-request.model';

@Injectable({
  providedIn: 'root',
})
export class SketchQueueService {
  private readonly storageKey = 'ayushi-arya-sketch-queue';

  createRequest(input: SketchRequestInput, createdAt = new Date()): SketchRequest {
    const existingRequests = this.getRequests();
    const queueNumber = existingRequests.length + 1;
    const request: SketchRequest = {
      ...input,
      message: input.message?.trim() || '',
      tokenId: this.generateTokenId(createdAt, queueNumber),
      createdAt: createdAt.toISOString(),
      queueNumber,
      status: 'Queued',
    };

    this.saveRequests([...existingRequests, request]);
    return request;
  }

  getRequests(): SketchRequest[] {
    if (!this.hasStorage()) {
      return [];
    }

    const rawRequests = window.localStorage.getItem(this.storageKey);
    if (!rawRequests) {
      return [];
    }

    try {
      const parsed = JSON.parse(rawRequests);
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      return [];
    }
  }

  generateTokenId(date: Date, queueNumber: number): string {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const queue = String(queueNumber).padStart(3, '0');

    return `AA-SK-${year}${month}${day}-${queue}`;
  }

  private saveRequests(requests: SketchRequest[]): void {
    if (!this.hasStorage()) {
      return;
    }

    window.localStorage.setItem(this.storageKey, JSON.stringify(requests));
  }

  private hasStorage(): boolean {
    return typeof window !== 'undefined' && typeof window.localStorage !== 'undefined';
  }
}
