import getConfig from 'next/config'
const {publicRuntimeConfig} = getConfig();

const endpointWpAPI = 'http://13.239.94.225/wp-json/wp/v2'; // change this to AWS API Gateway URL once deployed

console.log(`publicRuntimeConfig.node_env : ${publicRuntimeConfig.node_env} | endpoint: ${endpointWpAPI}`);

export default {
    endpoint: endpointWpAPI, 
    sitename: '',
    PostTypes: ['menu', 'events', 'locations'],
}
