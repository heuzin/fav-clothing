import { createSelector } from 'reselect';

const selectDirectory = (state: any) => state.directory;

export const selectDirectorySection = createSelector([selectDirectory], (directory) => directory.sections);
