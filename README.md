# bank schema

This is intended to be a standard for representing bank data. It is ZAR-centric.

The schemas are defined using [json-schema](https://json-schema.org/).

## Usage

**Use the provided validators** if you don't need any extra functionality:

```typescript
import {validateStatement, validateTransaction} from "bank-schema";

const statement = { /* ... */ };
const statementValidationResult = validateStatement(statement);
console.log(statementValidationResult);

const transaction = { /* ... */ };
const transactionValidationResult = validateTransaction(transaction);
console.log(transactionValidationResult);
```

**Pull in the schema(s) directly** if you need to build a custom schema validator:

```typescript
import {transactionSchema} from "bank-schema";
/* use transactionSchema in your own validator */
```

## Development

Run tests using

```bash
npm t
```