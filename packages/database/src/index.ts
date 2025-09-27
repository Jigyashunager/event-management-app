export * from '@prisma/client';
export { PrismaClient } from '@prisma/client';

// Database connection singleton
import { PrismaClient } from '@prisma/client';

declare global {
  var __db: PrismaClient | undefined;
}

export const db =
  globalThis.__db ||
  new PrismaClient({
    log: ['query', 'error', 'warn'],
  });

if (process.env.NODE_ENV !== 'production') {
  globalThis.__db = db;
}

// Helper functions
export const connectDB = async () => {
  try {
    await db.$connect();
    // eslint-disable-next-line no-console
    console.log('✅ Database connected successfully');
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('❌ Database connection failed:', error);
    process.exit(1);
  }
};

export const disconnectDB = async () => {
  await db.$disconnect();
};
