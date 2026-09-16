import dotenv from "dotenv"
dotenv.config({path: ".env", override: true});

export class ConfigManager{

static get base_url_config(){
    return process.env.baseurl;
}
static get user_name_config(){
    return process.env.username;
}
static get pass_word_config(){
    return process.env.password;
}
static get base_url2_config(){
    return process.env.baseurl2;
}
}