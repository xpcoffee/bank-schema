import {ValidatorResult, ValidationError} from "jsonschema";

export function improveValidationErrors(validationResult: ValidatorResult): ValidatorResult {
    // Cloning the validation result is very messy. I'm consciously deciding to mutate it to favour simplicity.
    validationResult.errors = validationResult.errors.map(improveValidationError);
    return validationResult;
}

function improveValidationError(validationError: ValidationError): ValidationError {
    /**
     * The regex pattern for timestamp is unintelligible.
     */
    if(validationError.property === "instance.timeStamp") {
        return {
            ...validationError,
            message: "Timestamp must be in ISO-8601 format."
        }
    }
    return validationError;
}