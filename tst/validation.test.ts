import {validateStatement, validateTransaction} from "../src/validation";
import { validate } from "jsonschema";

describe("validateStatement", () => {
    it("passes validation on a valid statement", () => {
        const result = validateStatement({
            "account": "foo",
            "bank": "bar",
            "transactions": []
        }).valid;
        expect(result).toBeTruthy();
    });

    it("fails validation on an invalid statement", () => {
        const result = validateStatement({ hello: "world" });
        expect(result.valid).toBeFalsy();
    });

    it("fails validation on an empty object", () => {
        const result = validateStatement({});
        expect(result.valid).toBeFalsy();
    });
})