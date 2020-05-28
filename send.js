const aws = require('aws-sdk');
const { promisify } = require('util');

aws.config.update({ region: 'us-east-1' });

const sqs = new aws.SQS({ endpoint: 'http://localhost:4576' });

sqs.sendMessage = promisify(sqs.sendMessage);
const QueueUrl = 'http://localhost:4576/queue/MyFirstQueue';

async function send() {
  var params = {
    MessageBody: 'Hello world!',
    QueueUrl: QueueUrl,
    DelaySeconds: 0
  };

  sqs.sendMessage(params, function (err, data) {
    if (err) {
      console.log(err);
    }
    else {
      console.log(data);
    }
  });
}

send();