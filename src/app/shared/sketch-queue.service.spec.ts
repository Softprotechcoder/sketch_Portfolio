import { SketchQueueService } from './sketch-queue.service';

describe('SketchQueueService', () => {
  let service: SketchQueueService;

  beforeEach(() => {
    window.localStorage.clear();
    service = new SketchQueueService();
  });

  it('generates token ids with date and queue number', () => {
    const token = service.generateTokenId(new Date('2026-04-25T10:30:00'), 7);

    expect(token).toBe('AA-SK-20260425-007');
  });

  it('stores request metadata with an incrementing queue token', () => {
    const first = service.createRequest(
      {
        name: 'Asha',
        email: 'asha@example.com',
        mobile: '9876543210',
        address: 'Studio Road',
        deliveryAddress: 'Email delivery',
        message: 'Soft portrait please',
        photoName: 'portrait.jpg',
        photoPreview: 'data:image/jpeg;base64,abc',
      },
      new Date('2026-04-25T10:30:00'),
    );

    const second = service.createRequest(
      {
        name: 'Riya',
        email: 'riya@example.com',
        mobile: '9876543211',
        address: 'Art Lane',
        deliveryAddress: 'WhatsApp delivery',
        photoName: 'family.png',
      },
      new Date('2026-04-25T10:31:00'),
    );

    expect(first.tokenId).toBe('AA-SK-20260425-001');
    expect(second.tokenId).toBe('AA-SK-20260425-002');
    expect(service.getRequests()).toHaveLength(2);
  });
});
