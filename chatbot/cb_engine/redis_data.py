import redis


def create_redis_client():
    return redis.Redis (
        host='redis-13575.c294.ap-northeast-1-2.ec2.cloud.redislabs.com',
        port=13575,
        password="on5LSWp5y3bNeNARv28kO72A2rRAcpoq",
    )