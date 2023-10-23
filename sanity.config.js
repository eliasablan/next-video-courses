import { defineConfig, buildLegacyTheme } from 'sanity';
import { deskTool } from 'sanity/desk';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './sanity/schemas';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;

const themeProps = {
  '--my-white': '#fff',
  '--my-black': '#1a1a1a',
  '--brand-color': '#F7AB0A',
  '--my-red': '#db4437',
  '--my-yellow': '#f4b400',
  '--my-green': '#0f9d58',
};

const config = defineConfig({
  name: 'default',
  title: 'Video Courses App',

  projectId,
  dataset,

  apiVersion: '2023-09-17',

  plugins: [deskTool(), visionTool()],

  basePath: '/admin',
  useCdn: true,

  schema: {
    types: schemaTypes,
  },

  // Studio Colors
  theme: buildLegacyTheme({
    '--black': themeProps['--my-black'],
    '--white': themeProps['--my-white'],

    '--gray': '#666',
    '--gray-base': '#666',

    '--component-bg': themeProps['--my-black'],
    '--component-text-color': themeProps['--my-white'],

    '--brand-primary': themeProps['--brand-color'],

    '--default-button-color': '#666',
    '--default-button-danger-color': themeProps['--my-red'],
    '--default-button-primary-color': themeProps['--brand-color'],
    '--default-button-success-color': themeProps['--my-green'],
    '--default-button-warning-color': themeProps['--my-yellow'],

    '--state-danger-color': themeProps['--my-red'],
    '--state-info-color': themeProps['--brand-color'],
    '--state-success-color': themeProps['--my-green'],
    '--state-warning-color': themeProps['--my-yellow'],

    // '--font-family-base': string,
    // '--font-family-monospace': string,

    // '--screen-default-break': string,
    // '--screen-large-break': string,
    // '--screen-medium-break': string,
    // '--screen-xlarge-break': string,

    '--main-navigation-color': themeProps['--my-black'],
    '--main-navigation-color--inverted': themeProps['--my-white'],

    '--focus-color': themeProps['--brand-color'],
  }),
});

export default config;
