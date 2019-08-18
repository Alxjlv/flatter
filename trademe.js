const axios = require('axios');
const KEY = "1B2E786547417FF7CBD9369EBBB1554E";
const SECRET = "BB272A71148EBDB97016DF8301B3FA28"

const getFlatList = async (region,district="",suburb="") => {
    url='https://api.trademe.co.nz'
    const Authorization= `OAuth oauth_consumer_key="${KEY}",oauth_signature_method="PLAINTEXT", oauth_signature="${SECRET}&",oauth_version="1.0"`
    try {
        const response = await axios.get(url+`/v1/Search/Flatmates.json?region=${region}&suburb=${suburb}&district=${district}`,{ headers: {"Authorization" :Authorization}});
        return response.data.List;
    } catch (error) {
        return error;
    }
}

module.exports=getFlatList;
