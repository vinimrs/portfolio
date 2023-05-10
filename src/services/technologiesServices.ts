import fs from 'fs/promises';
import path from 'path';
import yml from 'js-yaml';

export interface Technology {
  title: string;
  description: string;
  icon: string;
}

export interface TechnologiesI {
  brief: string;
  tecnologies: Technology[];
}

export const technologiesServices = {
  getAll: async (): Promise<TechnologiesI> => {
    const PATH_TECNOLOGIES = path.resolve(
      '.',
      '__data',
      'technologies',
      'technologies.yml'
    );
    const technologiesFile = await fs.readFile(PATH_TECNOLOGIES, {
      encoding: 'utf-8',
    });
    const technologies = yml.load(technologiesFile);
    return technologies;
  },
};
