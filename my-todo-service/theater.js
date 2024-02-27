'use strict';
const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient();

module.exports.list = async (event, context) => {
    const params = {
        TableName: "carolines_movies",
    };

    try {
        const data = await docClient.scan(params).promise();
        return {
            statusCode: 200,
            headers: {
                'Access-Control-Allow-Origin': '*', // Or the specific origin you want to give access to
                'Access-Control-Allow-Credentials': true,
            },
            body: JSON.stringify(data.Items),
        };
    } catch (error) {
        console.error(`Unable to scan table. Error JSON: ${JSON.stringify(error, null, 2)}`);
        return {
            statusCode: 500,
            body: JSON.stringify({message: 'Internal Server Error'}),
        };
    }
}