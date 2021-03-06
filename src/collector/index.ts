import { IntegrationConfig } from '../types';

import { IntegrationInstance } from '@jupiterone/integration-sdk-core';

import { ServicesClient } from './ServicesClient';

export * from './types';

/**
 * Creates a ServicesClient from an integration instance using it's
 * api key.
 */
export function createServicesClient(
  instance: IntegrationInstance<IntegrationConfig>,
): ServicesClient {
  const apiKey = instance.config.apiKey;

  if (!apiKey) {
    throw new Error(
      'Configuration option "apiKey" is missing on the integration instance config',
    );
  }

  return new ServicesClient({ apiKey });
}
