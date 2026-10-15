import{ test } from '@playwright/test'
test.only('continue request demo', async ({page})=>{
    await page.route('**/products.json', async(route)=>
    {
        // const request = route.request();
        // console.log('URL:', request.url());
        // console.log('Method:', request.method());
        // console.log('Headers:', request.headers());
        // console.log('Product API intercepted');
        // await route.continue();

        // console.log('Product API blocked');
        // await route.abort();

        console.log('Mocking product API response');
            //get real response first
        const response= await route.fetch();
        const body = await response.json();
            //modify data(keep only 3 products)
        body.products = body.products.slice(0,3);
            //send modified response back to UI
        await route.fulfill({
            response, 
            body: JSON.stringify(body)
        });
    }); 
    await page.goto('https://react-shopping-cart-67954.firebaseapp.com/');
    await page.waitForTimeout(5000);
}); 