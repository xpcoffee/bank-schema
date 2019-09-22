import {Validator} from "jsonschema";
import {statementSchema, transactionSchema} from "./schema";
import { improveValidationErrors } from "./improveValidationErrors";

export function validateStatement(object: any) {
    const validator = new Validator();
    validator.addSchema(transactionSchema, transactionSchema.id);
    return validator.validate(object, statementSchema);
}

export function validateTransaction(object: any) {
    const validator = new Validator();
    return improveValidationErrors(validator.validate(object, transactionSchema));
}
