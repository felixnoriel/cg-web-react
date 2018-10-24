import fetch from 'isomorphic-unfetch'
import config from './config';

function getWPApi(posttype, params){
    let filter = "";
    if(params){
        for(var i in params){
            filter += '&' + i + '=' + params[i];
        }
    }
    console.log(config);
    //const res =  fetch(`${config.endpoint}/${posttype}?_embed=true${filter}`);
    const res =  fetch(`${config.endpoint}/${posttype}.json`);
    return res;
}

export default {
    getWPApi
}
