const axios = require('axios');
const KEY = process.env.trademeKey;
const SECRET = proess.env.trademeSecret;

const getFlatList = async(region,district="Auckland C",suburb="") => {
    url='https://api.trademe.co.nz'
    const Authorization= `OAuth oauth_consumer_key="${KEY}",oauth_signature_method="PLAINTEXT", oauth_signature="${SECRET}&",oauth_version="1.0"`
    try {
        const response = await axios.get(url+`/v1/Search/Flatmates.json?region=${region}&suburb=${suburb}&district=${district}&photo_size=FullSize`,{ headers: {"Authorization" :Authorization}});
        return response.data.List;
    } catch (error) {
        return error;
    }
}

module.exports={getFlatList}
