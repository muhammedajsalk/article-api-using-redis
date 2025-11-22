import redisClient from "../config/redisConnect";

export const deleteCache=async(key:string)=>{
    try {
        await redisClient.del(key)
        console.log(`🗑 Deleted Cache → ${key}`);
    } catch (error) {
        console.error("Redis delete error:", error);
    }
}

export const deleteByPattern=async(pattern:string)=>{
    try {
        const keys=await redisClient.keys(pattern)
        if(keys.length>0){
            await redisClient.del(keys)
            console.log(`🗑🗑 Deleted Cache Keys →`, keys);
        }
    } catch (error) {
        console.error("Redis pattern delete error:", error);
    }
}