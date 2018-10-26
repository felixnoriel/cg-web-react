import fetch from 'isomorphic-unfetch'
import config from '../helpers/config';

// All API requests related actions are done here

export async function fetchArchive(posttype, params){
    // post type = drinks, food, dessert, etc
    // could also be their categories, eg: drinks-category, food-category, etc
    const filter = filterParams(params);
    try{
        const res =  await fetch(`${config.endpoint}/${posttype}?_embed=true${filter}`);
        return res;
    }catch(err){
        return err;
    }
}

export async function fetchPost(posttype, slug, params){ // params is an object
    // getting a post by post type 
    // eg: food?slug=cheeseburger
    const filter = filterParams(params);
    try{
        const res =  await fetch(`${config.endpoint}/${posttype}?slug=${slug}&_embed=true${filter}`);
        return res;
    }catch(err){
        return err;
    }
}

export async function fetchGenericByRestRoute(route, params = null){
    const filter = filterParams(params);
    try{
        const res =  await fetch(`${config.endpoint}/${route}?_embed=true${filter}`);
        return res;
    }catch(err){
        return err;
    }
}

function filterParams(params){
    if(!params){
        return "";
    }
    let filter = "";
    for(let i in params){
        if( params[i] !== null && params[i] !== undefined ){
            filter += `&${i}=${params[i]}`;
        }
    }
    return filter;
}