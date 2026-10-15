import { test, expect } from '@playwright/test';
import Ajv from 'ajv';
test.only('JSON Schema validation', async ({request})=>{
    const response = await request.get('https://jsonplaceholder.typicode.com/users/1');
    expect(response.status()).toBe(200);
    const responseBody = await response.json();
    const userSchema = {
        type: "object",
        properties: {
            id: { type: "number"},
            name: {type: "string"},
            username: { type: "string"},
            email: {type: "string"},
            address: {
                type: "object",
                properties: {
                    street: { type: "string"},
        suite:  { type: "string"},
        city:   { type: "string"},
        zipcode:{ type: "string"},
        geo:    { 
            type: "object",
            properties: {
                lat: { type: "string"},
                lng: { type: "string"}
                        },
                required: ["lat", "lng"]
                }
        },
        required: ["street", "suite", "city", "zipcode", "geo"]
            },
    phone:      { type: "string" },
    website:    { type: "string"},
    company:    {
            type: "object",
            properties: 
            {
            name:        {type: "string"},
            catchPhrase: {type: "string"},
            bs:          {type: "string"}
            },
            required: ["name", "catchPhrase", "bs"]
            }
            },
    required: 
    [
        "id",
        "name",
        "username",
        "email",
        "address",
        "phone",
        "website",
        "company"
    ]

    
    };
    const ajv = new Ajv();
    const validate = ajv.compile(userSchema);
    const isValid = validate(responseBody);
    expect(isValid).toBe(true);
    

    });