import { createAction, props } from '@ngrx/store';

export const filterAction = createAction('Filter', props<{ text: string }>());

