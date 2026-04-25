import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

import { SketchRequest } from '../shared/sketch-request.model';
import { SketchQueueService } from '../shared/sketch-queue.service';

@Component({
  selector: 'app-commission',
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './commission.html',
  styleUrl: './commission.scss',
})
export class Commission {
  private readonly formBuilder = inject(FormBuilder);
  private readonly queueService = inject(SketchQueueService);

  readonly acceptedTypes = ['image/jpeg', 'image/png', 'image/webp'];
  readonly form = this.formBuilder.nonNullable.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    mobile: ['', [Validators.required, Validators.minLength(10)]],
    address: ['', [Validators.required]],
    deliveryAddress: ['', [Validators.required]],
    photoName: ['', [Validators.required]],
    message: [''],
  });

  imagePreview = '';
  fileError = '';
  submittedRequest: SketchRequest | null = null;

  get hasToken(): boolean {
    return this.submittedRequest !== null;
  }

  onPhotoSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];
    this.fileError = '';
    this.imagePreview = '';
    this.form.controls.photoName.setValue('');

    if (!file) {
      return;
    }

    if (!this.acceptedTypes.includes(file.type)) {
      this.fileError = 'Please upload a JPG, PNG, or WEBP image.';
      input.value = '';
      return;
    }

    this.form.controls.photoName.setValue(file.name);
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = String(reader.result || '');
    };
    reader.readAsDataURL(file);
  }

  submitRequest(): void {
    this.form.markAllAsTouched();

    if (this.form.invalid || this.fileError) {
      return;
    }

    const value = this.form.getRawValue();
    this.submittedRequest = this.queueService.createRequest({
      ...value,
      photoPreview: this.imagePreview,
    });
  }

  closeToken(): void {
    this.submittedRequest = null;
  }

  startAnother(): void {
    this.form.reset();
    this.imagePreview = '';
    this.fileError = '';
    this.submittedRequest = null;
  }
}
