import { Schema } from "jsonschema";

export const statementSchema: Schema = {
    "id": "/Bank statement",
    "type": "object",
    "properties": {
        "account": { "type": "string" },
        "bank": { "type": "string" },
        "transactions": {
            "type": "list",
            "items": { "$ref": "/Transaction" }
        },
        "parsingErrors": {
            "type": "list",
            "items": { "type": "string" },
            "uniqueItems": true
        }
    },
    "required": [
        "transactions",
        "account",
        "bank",
    ]
}

export const transactionSchema: Schema = {
    "id": "/Transaction",
    "type": "object",
    "properties": {
        "timeStamp": { 
            "type": "string" ,
            "pattern": "^(-?(?:[1-9][0-9]*)?[0-9]{4})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9])T(2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9])(\.[0-9]+)?(Z|[+-](?:2[0-3]|[01][0-9]):[0-5][0-9])?$",
            "description": "Timestamp must be in ISO-8601 format"
        },
        "amountInZAR": { "type": "number" },
        "description": { "type": "string" },
        "hash": { "type": "string" },
        "balance": { "type": "number" }
    },
    "required": ["timeStamp", "amountInZAR", "description", "hash", "balance"]
}