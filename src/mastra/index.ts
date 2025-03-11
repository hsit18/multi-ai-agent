
import { Mastra } from '@mastra/core/mastra';
import { createLogger } from '@mastra/core/logger';

import { weatherAgent } from './agents/wheather';
import { stockAgent } from './agents/stock';

export const mastra = new Mastra({
  agents: { weatherAgent, stockAgent },
  logger: createLogger({
    name: 'Mastra',
    level: 'info',
  }),
});
