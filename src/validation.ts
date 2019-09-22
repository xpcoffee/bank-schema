import {Validator} from "jsonschema";
import {statementSchema, transactionSchema} from "./schema";

export function validateStatement(object: any) {
    const validator = new Validator();
    validator.addSchema(transactionSchema, transactionSchema.id);
    return validator.validate(object, statementSchema);
}

export function validateTransaction(object: any) {
    const validator = new Validator();
    return validator.validate(object, transactionSchema);
}
