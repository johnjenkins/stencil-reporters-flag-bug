import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'stecnil-reporters-test',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
  testing: {
    coverageReporters: [
      'html',
      'text',
      'text-summary',
      'cobertura'
    ]
  }
};
