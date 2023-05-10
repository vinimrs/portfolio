import fs from 'fs/promises';
import path from 'path';
import yml from 'js-yaml';

export interface Timeline {
  year: string;
  text: string;
}

export interface Timelines {
  timelines: Timeline[];
  brief: string;
}

export const timelineServices = {
  getAll: async (): Promise<Timelines> => {
    const PATH_TIMELINE = path.resolve(
      '.',
      '__data',
      'timeline',
      'timeline.yml'
    );
    const timelineFile = await fs.readFile(PATH_TIMELINE, {
      encoding: 'utf-8',
    });
    const timeline = yml.load(timelineFile);
    return timeline;
  },
};
