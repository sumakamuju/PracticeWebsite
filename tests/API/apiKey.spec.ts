import{test, expect} from '@playwright/test';
test.only('API Key Authentication', async({request})=>{
    const response = await request.get(
        'https://api.thecatapi.com/v1/images/search',
        {
            headers:{
                'x-api-key': 'PASTE_YOUR_API_KEY_HERE'
            }
        }
    );
    expect(response.status()).toBe(200);
    const responseBody = await response.json();
    console.log(responseBody);
})