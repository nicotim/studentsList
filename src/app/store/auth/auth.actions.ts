import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { User } from 'src/app/dashboard/pages/users/models';

export const authActions = createActionGroup({
  source: 'Auth',
  events: {
    'Set Auth User': props<{ data: User }>(),
    'Reset State': emptyProps(),
  },
});
