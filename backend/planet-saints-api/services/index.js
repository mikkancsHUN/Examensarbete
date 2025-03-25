const { DynamoDB } = require('@aws-sdk/client-dynamodb');
const { DynamoDBDocument } = require('@aws-sdk/lib-dynamodb');
const client = new DynamoDB();
const db = DynamoDBDocument.from(client);

const TABLE_NAME = "planet-saints-products"; // Módosított táblanév

module.exports = { db, TABLE_NAME };
