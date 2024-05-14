import { Pipe, PipeTransform } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Pipe({
  name: 'formError',
})
export class FormErrorPipe implements PipeTransform {
  transform(
    value: ValidationErrors | null | undefined,
    ...args: unknown[]
  ): unknown {
    if (!value) {
      return '';
    }
    const errorMessages: string[] = [];
    if (value) {
      if ('required' in value) {
        errorMessages.push('This field is required.');
      }
      if ('email' in value) {
        errorMessages.push('Provide a valid email address.');
      }
      if ('pattern' in value) {
        errorMessages.push(
          'Password must contain at least one uppercase letter, one lowercase letter, and be at least 8 characters long.'
        );
      }
    }
    return errorMessages.join('. ');
  }
}
