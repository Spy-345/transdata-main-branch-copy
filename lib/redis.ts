import { createClient } from "redis";

const redis = await createClient({
  url: process.env.STORAGE_REDIS_URL,
}).connect();

export function getRedisClient() {
  if (redis.isOpen) {
    return redis;
  } else {
    console.error("❌ Redis connection error:", redis.isOpen);
    return null;
  }
}

// Cache utility functions
export async function getCachedData<T>(key: string): Promise<T | null> {
  try {
    const client = getRedisClient();
    if (!client) {
      return null;
    }
    const data = await client.get(key);
    return data ? JSON.parse(data) : null;
  } catch (error) {
    console.error("❌ Redis get error:", error);
    return null;
  }
}

export async function setCachedData<T>(
  key: string,
  data: T,
  ttlSeconds: number = 300
): Promise<void> {
  try {
    const client = getRedisClient();
    if (!client) {
      return;
    }
    await client.set(key, JSON.stringify(data), { EX: ttlSeconds });
  } catch (error) {
    console.error("❌ Redis set error:", error);
  }
}

export async function deleteCachedData(key: string): Promise<void> {
  try {
    const client = getRedisClient();
    if (!client) {
      return;
    }
    await client.del(key);
  } catch (error) {
    console.error("❌ Redis delete error:", error);
  }
}

export async function clearCache(pattern: string = "*"): Promise<void> {
  try {
    const client = getRedisClient();
    if (!client) {
      return;
    }
    const keys = await client.keys(pattern);
    if (keys.length > 0) {
      await client.del(keys);
    }
  } catch (error) {
    console.error("❌ Redis clear cache error:", error);
  }
}

// Cache key generators
export function generateCacheKey(
  prefix: string,
  params: Record<string, any>
): string {
  const sortedParams = Object.keys(params)
    .sort()
    .map((key) => `${key}:${params[key]}`)
    .join("|");
  return `${prefix}:${sortedParams}`;
}

// Health check
export async function checkRedisHealth(): Promise<boolean> {
  try {
    const client = getRedisClient();
    if (!client) {
      return false;
    }
    await client.ping();
    return true;
  } catch (error) {
    console.error("❌ Redis health check failed:", error);
    return false;
  }
}
