//APPLICATION PROGRAMMING INTERFACE - API
//GET METHOD - TO FETCH DATA
import { test, expect} from '@playwright/test'
/* test("GET users API", async ({request})=>
{
    const response= await request.get("https://jsonplaceholder.typicode.com/users");
    console.log(await response.json());
    expect (response.status()).toBe(200);

}) */

//POST - HTTP method to send data to the server
/* test("create user using POST API", async({request})=>
{
    const response=await request.post("https://jsonplaceholder.typicode.com/users",
    {
    data: 
        {
        name: 'Test User',
        email: 'testuser@example.com'
        }
    })
    const responseBody= await response.json();
    console.log(responseBody);
    expect(response.status()).toBe(201);
})

//PUT - to update existing data
test("update user using PUT API", async({request})=>
{
    const response= await request.put("https://jsonplaceholder.typicode.com/users/1",
    {
        data:
        {
            name: 'updated name',
            email: 'updatedemail@example.com'
        }
    }) 
    const responseBody = await response.json();
    console.log(responseBody);
  //  expect(response.status()).toBe(200);
})

//DELETE- to delete data
test("Delete user using DELETE API", async({request})=>
{
    const response= await request.delete("https://jsonplaceholder.typicode.com/users");
    console.log(response.status());
    expect(response.status()).toBe(200);
    
})

// GET response
test("GET users  API", async ({request})=>{
    const response = await request.get("https://jsonplaceholder.typicode.com/users");
    
    //convert response to json
    const data = await response.json();
    console.log(data);
    expect(response.status()).toBe(200);
    
    //validate array length
    expect(Array.isArray(data)).toBeTruthy();
    console.log("data is in array format");
    expect (data.length).toBe(10);
    const firstuser = data[0];
    expect(firstuser.id).toBe(1);
    expect(firstuser.name).toBe("Leanne Graham");
    expect(firstuser.name).toBeDefined();
    expect(firstuser.email).toContain('@');
    expect(firstuser.address).toBeDefined();
    expect(firstuser.address.city).toBeDefined();
    for(const user of data)
        {
        expect(user.id).toBeDefined();
        expect(user.email).toContain('@');
        expect(user.phone).toBeDefined();
        } 
    
    //datatype validation
    expect(typeof firstuser.id).toBe('number');
    expect(typeof firstuser.name).toBe('string');
    //empty validation
    //expect(firstuser.id).toBe("");

}) */
//HEADERS
test.only('validate API Headers in playwright', async({request})=>
{
    const requestHeaders = {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    };
    const response = await request.post(
        'https://jsonplaceholder.typicode.com/users',{
            headers: requestHeaders,
            data:{
            name: 'Test User',
            email: 'testuser@example.com'
        }
        }
    );
    const responseBody = await response.json();
    console.log('Response Headers');
    console.log(response.headers());
    console.log('Response Body');
    console.log(responseBody);
    //expect (response.status()).toBe(201);
    expect(response.headers()['content-type']).toBeDefined();
    expect(response.headers()['content-type']).toContain('application/json');
    expect(response.headers()['servers']).toBeDefined();
    expect(responseBody.name).toBe('Test User');
    expect(responseBody.email).toBe('testuser@example.com');
    expect(responseBody.id).toBeDefined();
    expect(typeof responseBody.id).toBe('number');

});
