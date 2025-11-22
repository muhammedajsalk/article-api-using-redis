import redis, { createClient } from 'redis'

const redisClient=createClient({
    url:process.env.REDIS_URI
})

redisClient.on("connect",()=>{
    console.log("redis connected successfully")
})

redisClient.on("error",(err)=>{
    console.error("redis connection error:", err);
})

export const connectRedis=async ()=>{
   await redisClient.connect()
}

export default redisClient