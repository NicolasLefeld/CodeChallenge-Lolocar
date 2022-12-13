const axios = require('axios');

async function exampleController(name = 'lolocar') {

  const { data } = await axios.get(`https://api.agify.io/?name=${name}`)

  const response = `Hola, ${name} tu edad es ${ data.age }`;
  
  return response 
}

module.exports = {
  exampleController,
};
