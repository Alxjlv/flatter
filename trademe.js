const axios = require('axios');
const KEY = process.env.trademKey;
const SECRET = process.env.trademeSecret;

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

module.exports={getFlatList}
