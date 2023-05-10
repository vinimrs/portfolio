import yml from 'js-yaml';
import path from 'path';
import fs from 'fs/promises';

export interface TemplateConfig {
  site?: {
    title?: string;
    description?: string;
  };
  personal?: {
    welcome?: string;
    brief?: string;
    phone?: string;
    email?: string;
    footerQuote?: string;
    socialNetworks?: {
      youtube?: string;
      github?: string;
      twitter?: string;
      linkedin?: string;
      instagram?: string;
    };
  };
}
export async function withTemplateConfig(props = {}) {
  const PATH_TEMPLATE_CONFIG = path.resolve(
    '.',
    '__data',
    'template-config.yml'
  );
  const projectFile = await fs.readFile(PATH_TEMPLATE_CONFIG, {
    encoding: 'utf-8',
  });
  const templateConfig = yml.load(projectFile);
  return {
    templateConfig,
    ...props,
  };
}
