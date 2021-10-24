# docker run -d --name kafka_broker_1 -p 9092:9092 -e KAFKA_ZOOKEEPER_CONNECT=0.0.0.0:2181 -e KAFKA_OFFSETS_TOPIC_REPLICATION_FACTOR=1 -e KAFKA_ADVERTISED_LISTENERS=PLAINTEXT://0.0.0.0:9092 confluentinc/cp-kafka

docker run -d \
  --name=kafka_broker_1 \
  -p 9092:9092 \
  -e KAFKA_BROKER_ID=1 \
  -e KAFKA_ZOOKEEPER_CONNECT=Kartiks-MacBook-Air.local:2181 \
  -e KAFKA_ADVERTISED_LISTENERS=PLAINTEXT://Kartiks-MacBook-Air.local:9092 \
  -e KAFKA_LOG4J_LOGGERS="kafka.controller=WARN,kafka.foo.bar=DEBUG" \
  -e KAFKA_LOG4J_ROOT_LOGLEVEL=WARN \
  -e KAFKA_TOOLS_LOG4J_LOGLEVEL=ERROR \
  confluentinc/cp-kafka