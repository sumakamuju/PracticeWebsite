import dotenv from 'dotenv';
dotenv.config({path: ".env", override: true});

export class ConfigManager{
    static get base_url(){
        return process.env.baseUrl;
    }
}