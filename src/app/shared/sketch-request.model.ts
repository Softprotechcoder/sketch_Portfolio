export interface SketchRequestInput {
  name: string;
  email: string;
  mobile: string;
  address: string;
  deliveryAddress: string;
  message?: string;
  photoName: string;
  photoPreview?: string;
}

export interface SketchRequest extends SketchRequestInput {
  tokenId: string;
  createdAt: string;
  queueNumber: number;
  status: 'Queued';
}
