import {validateStatement, validateTransaction} from "../src/validation";

describe("validateStatement", () => {
    it("passes validation on a valid statement", () => {
        const result = validateStatement({
            "account": "foo",
            "bank": "bar",
            "transactions": [],
            "unknown key": "should be ignored"
        }).valid;
        expect(result).toBeTruthy();
    });

    it("fails validation on an invalid statement", () => {
        const result = validateStatement({
            "account": 1,
            "bank": 2,
            "transactions": 3 
        });
        expect(result.valid).toBeFalsy();
    });

    it("fails validation on an empty object", () => {
        const result = validateStatement({});
        expect(result.valid).toBeFalsy();
    });
})

describe("validateTransaction", () => {
    it("passes validation on a valid statement", () => {
        const result = validateTransaction({
            "hash": "foobarbaz1",
            "timeStamp": "2019-11-22T00:00:00+02:00",
            "amountInZAR": 1,
            "description": "baz",
            "balance": 1,
            "unknown key": "should be ignored"
        });
        expect(result.valid).toBeTruthy();
    });

    it("fails validation on an invalid statement", () => {
        const result = validateTransaction({
            "hash": 1,
            "timeStamp": 2,
            "amountInZAR": 3,
            "description": 4,
            "balance": "foo"
        }).valid;
        expect(result).toBeFalsy();
    });

    it("fails validation on an empty object", () => {
        const result = validateStatement({});
        expect(result.valid).toBeFalsy();
    });
})