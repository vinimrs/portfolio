import path from 'path';
import fs from 'fs/promises';
import yml from 'js-yaml';

export interface Project {
  title: string;
  status: string;
  description: string;
  image: string;
  tags: { name: string; link: string }[];
  source: string;
  visit: string;
  preview: string;
  id: number;
}

export const projectsServices = {
  getAll: async () => {
    const PATH_PROJECTS = path.resolve('.', '__data', 'projects');
    const projectsFiles = await fs.readdir(PATH_PROJECTS, {
      encoding: 'utf-8',
    });
    const projectsPromise = projectsFiles.map(async projectFileName => {
      const filePath = path.join(PATH_PROJECTS, projectFileName);
      const projectFile = await fs.readFile(filePath, { encoding: 'utf-8' });
      const cont = yml.load(projectFile);

      return cont;
    });
    const projects = Promise.all(projectsPromise);
    return projects;
  },
  getActiveProjects: async () => {
    const projects = await projectsServices.getAll();
    const currentProjects = projects.filter(
      project => project.status !== 'Descontinuado'
    );
    return currentProjects;
  },
};
