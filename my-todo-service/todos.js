'use strict';
const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient();
const uuid = require('uuid');


module.exports.list = async (event, context) => {
    const params = {
        TableName: "Carolines_todos",
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
};


module.exports.create = async (event, context) => {
    const requestBody = JSON.parse(event.body);
    const params = {
        TableName: "Carolines_todos",
        Item: {
            "id": uuid.v4(),
            "text": requestBody.text,
            "completed": requestBody.completed || false
        }
    };

    try {
        await docClient.put(params).promise();
        return {
            statusCode: 200,
            headers: {
                'Access-Control-Allow-Origin': '*', // Or the specific origin you want to give access to
                'Access-Control-Allow-Credentials': true,
            },
            body: JSON.stringify(params.Item),
        };
    } catch (error) {
        console.error(`Unable to add item. Error JSON: ${JSON.stringify(error, null, 2)}`);
        return {
            statusCode: 500,
            body: JSON.stringify({message: 'Internal Server Error'}),
        };
    }
};


module.exports.delete = async (event, context) => {
    const params = {
        TableName: "Carolines_todos",
        Key: {
            "id": event.pathParameters.id
        }
    };

    try {
        await docClient.delete(params).promise();
        return {
            statusCode: 200,
            headers: {
                'Access-Control-Allow-Origin': '*', // Or the specific origin you want to give access to
                'Access-Control-Allow-Credentials': true,
            },
            body: JSON.stringify({message: 'Todo deleted successfully'}),
        };
    } catch (error) {
        console.error(`Unable to delete item. Error JSON: ${JSON.stringify(error, null, 2)}`);
        return {
            statusCode: 500,
            body: JSON.stringify({message: 'Internal Server Error'}),
        };
    }
};

module.exports.preflight = async (event, context) => {
    return {
        statusCode: 200,
        headers: {
            'Access-Control-Allow-Origin': '*', // Or the specific origin you want to give access to
            'Access-Control-Allow-Methods': 'DELETE',
            'Access-Control-Allow-Headers': 'Content-Type',
            'Access-Control-Allow-Credentials': true,
        },
        body: JSON.stringify({message: 'CORS preflight successful'}),
    };
};