const { Kafka } = require('kafkajs');

const msg = process.argv[2];
const partition = msg[0] < 'N' ? 0 : 1;

async function run () {
    try {
        const kafka = new Kafka({
            clientId: 'Dapp',
            brokers: [ `localhost:9092` ]
        });
    
        const producer = kafka.producer();
    
        console.log('CONNECTING...');
    
        await producer.connect();

        console.log('CONNECTED...');
    
        const result = await producer.send({
            topic: 'Users',
            messages: [
                {
                    value: msg,
                    partition
                }
            ]
        });

        console.log(`Message(s) sent successfully!! ${JSON.stringify(result, null, 4)}`);
    } catch (err) {
        console.error(`Exception occurred`, err); 
    } finally {
        process.exit();
    }
}

run();