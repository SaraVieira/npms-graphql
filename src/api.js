const axios = require('axios')

exports.getSearch = (search) => axios(`https://api.npms.io/v2/search?q=${encodeURIComponent(search)}`).then(({ data }) => data)
