import fetch from 'isomorphic-unfetch'
import config from '../helpers/config';

// All API requests related actions are done here

export async function getArchive(posttype, params){
    // post type = drinks, food, dessert, etc
    // could also be their categories, eg: drinks-category, food-category, etc
    let filter = "";
    if(params){
        for(let i in params){
            filter += `&${i}=${params[i]}`;
        }
    }
    try{
        const res =  await fetch(`${config.endpoint}/${posttype}?_embed=true${filter}`);
        return res;
    }catch(err){
        return err;
    }
}

export async function getSinglePost(params){ // params is an object
    // getting a post by post type 
    // eg: food?slug=cheeseburger

    let filter = "";
    if(params){
        for(let i in params){
            filter += `&${i}=${params[i]}`;
        }
    }

    try{
        const res =  await fetch(`${config.endpoint}/${params.posttype}?slug=${params.slug}&_embed=true${filter}`);
        return res;
    }catch(err){
        return err;
    }
}

export async function getGeneric(route, params = null){
    let filter = "";
    if(params){
        for(let i in params){
            filter += `&${i}=${params[i]}`;
        }
    }

    try{
        const res =  await fetch(`${config.endpoint}/${route}?_embed=true${filter}`);
        return res;
    }catch(err){
        return err;
    }
}