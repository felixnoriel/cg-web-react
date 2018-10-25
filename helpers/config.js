import getConfig from 'next/config'
const {publicRuntimeConfig} = getConfig();

const endpointWpAPI = '//13.239.94.225/wp-json/wp/v2'; // change this to AWS API Gateway URL once deployed

console.log(`publicRuntimeConfig.node_env : ${publicRuntimeConfig.node_env} | endpoint: ${endpoint}`);

export default {
    endpoint: endpointWpAPI, 
    sitename: '',
    PostTypes: ['drinks', 'food', 'dessert'] // all new post types should be added here
}
