import {test, expect } from '@playwright/test';
test.only('Generate OAuth Access Token', async ({request})=>{
    const tokenresponse = await request.post(
        'https://github.com/login/oauth/access_token',
        {
            headers: {
                Accept: 'aapplication/json'
            },
            form: {
                client_id:' ',
                client_secret: ' ',
                code: ' '
            }
        }
    );
    expect(tokenresponse.status()).toBe(200);
    const tokenBody = await tokenresponse.json();
    console.log(tokenBody);
    const accessToken = tokenBody.access_token;
})