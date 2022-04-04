






const API = 'http://localhost:5000';

export const fetchFromAPI = async (endpoint, opts) => {



    console.log('Endpoint', endpoint)

    const { method, body } = { method: 'POST', body: null, ...opts}

    console.log('API', body)

    const res = await fetch(`${API}/${endpoint}`,{
        method,
        ...(body && { body: JSON.stringify(body)}),
        headers: {
            'Content-Type': 'application/json',
            
        }

    })

   

    console.log('RESPONEF API',res)

    return res.json()

}
   

//export {fetchFromAPI}
