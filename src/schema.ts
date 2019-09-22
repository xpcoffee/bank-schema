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
        "timeStamp": { "type": "string" },
        "amountInZAR": { "type": "number" },
        "description": { "type": "string" },
        "hash": { "type": "string" },
        "balance": { "type": "number" }
    },
    "required": ["timeStamp", "amountInZAR", "description", "hash", "balance"]
}