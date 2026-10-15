import { test, expect } from '@playwright/test';
test('Bearer Token Authenticaion', async ({request})=>{
    const loginResponse = await request.post(
        'https://dummyjson.com/auth/login',
        {
            data: {
                username: 'emilys',
                password: 'emilyspass'
            }
        }
    );
    expect(loginResponse.status()).toBe(200);
    const loginBody = await loginResponse.json();
    console.log(loginBody);
    const accessToken = loginBody.accessToken;
    console.log("Access Token:", accessToken);


    const profileResponse = await request.get(
    'https://dummyjson.com/auth/me',
    {
        headers:{
            Authorization: `Bearer ${accessToken}`
        }
    }
);
expect(profileResponse.status()).toBe(200);
const profileBody = await profileResponse.json();
console.log(profileBody);
expect(profileBody.username).toBe('emilys');
expect(profileBody.email).toBe('emily.johnson@x.dummyjson.com');
expect(profileBody.firstName).toBe('Emily');

});



 
