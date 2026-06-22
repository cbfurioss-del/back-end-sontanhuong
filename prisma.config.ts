import { defineConfig, env } from 'prisma/config';
import { config as dotenvConfig } from 'dotenv';

dotenvConfig();

export default defineConfig({
  schema: 'schema.prisma',
  datasource: {
    url: env('DATABASE_URL'),
  },
});
