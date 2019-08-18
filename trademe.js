const axios = require('axios');
const KEY = process.env.trademeKey;

const getFlatList = async (region,district) => {
    url='https://api.tmsandbox.co.nz'
    const Authorization= `OAuth oauth_consumer_key="${KEY}",oauth_signature_method="HMAC-SHA1",oauth_timestamp="1566079538",oauth_nonce="6imnLqU4S2S",oauth_version="1.0",oauth_signature="vGf7W4ALEyg8dRbgEkakHw8NRW4%3D"`
    try {
        const response = await axios.get(url+`/v1/Search/Flatmates.json?region=${region}&district=${district}`,{ headers: {"Authorization" :Authorization}});
        return response.data;
    } catch (error) {
        return error;
    }
}
//getFlatList("Auckland","Auckland").then(data=>console.log(data))
module.exports={getFlatList}
