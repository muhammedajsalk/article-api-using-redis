import { Request, Response, NextFunction } from "express";
import redisClient from "../config/redisConnect";

export const cache = (
    key: string | ((req: Request) => string),
    ttl: number
) => {
    return async (req: Request, res: Response, next: NextFunction) => {
        const cacheKey = typeof key === "function" ? key(req) : key;

        const cachedData = await redisClient.get(cacheKey);

        if (cachedData) {
            console.log(`📌 Cache Hit → ${cacheKey}`);
            return res.json(JSON.parse(cachedData));
        }

        const originalJson = res.json.bind(res);
        res.json = (data: any) => {
            redisClient
                .setEx(cacheKey, ttl, JSON.stringify(data))
                .then(() => {
                    console.log(`💾 Cache Saved → ${cacheKey} (TTL: ${ttl}s)`);
                })
                .catch((err) => console.error("Redis cache error:", err));

            return originalJson(data);
        };

        next();
    };
};
