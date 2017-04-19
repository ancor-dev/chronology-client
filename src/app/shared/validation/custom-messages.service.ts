import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { StringObject } from 'typed-object-interfaces';

/**
 * This service uses for data transmission
 * form {@link CustomMessagesDirective} to {@link FormGroupComponent}
 */
@Injectable()
export class CustomMessagesService extends BehaviorSubject<StringObject> {
  constructor() {
    super(null);
  }

  public update(messages: StringObject): void {

    this.next(messages);
  }

}
