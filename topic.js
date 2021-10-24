const { Kafka } = require('kafkajs');

async function run () {
    try {
        const kafka = new Kafka({
            clientId: 'Dapp',
            brokers: [ `localhost:9092` ]
        });
    
        const admin = kafka.admin();
    
        console.log('CONNECTING...');
    
        await admin.connect();

        console.log('CONNECTED...');
    
        await admin.createTopics({
            topics: [{
                topic: 'Users',
                numPartitions: 2
            }]
        });

        console.log('TOPIC CREATED');
    } catch (err) {
        console.error(`Exception occurred`, err); 
    } finally {
        process.exit();
    }
}

run();