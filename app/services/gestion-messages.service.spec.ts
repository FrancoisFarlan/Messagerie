import { TestBed } from '@angular/core/testing';

import { GestionMessagesService } from './gestion-messages.service';

describe('GestionMessagesService', () => {
  let service: GestionMessagesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GestionMessagesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
