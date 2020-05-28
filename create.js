const aws = require('aws-sdk');
const { promisify } = require('util');

aws.config.update({ region: 'us-east-1' });

const sqs = new aws.SQS({ endpoint: 'http://localhost:4576?Action=CreateQueue' });

sqs.createQueue = promisify(sqs.createQueue);
const QueueUrl = '';

async function create() {

  var params = {
    QueueName: "MyFirstQueue"
  };

  sqs.createQueue(params, function (err, data) {
    if (err) {
      console.log(err);
    }
    else {
      console.log(data);
    }
  });
}
create();
