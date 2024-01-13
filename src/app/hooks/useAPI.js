import axios from "axios";

async function useAPI(query, variables) {
  let res = {
    error: false,
    data: null,
  };

  try {
    const response = await axios.post(
      'https://graphql.contentful.com/content/v1/spaces/szk2cuaoivwt/environments/master',
      {
        query: query,
        variables: variables,
      },
      {
        headers: {
          'Accept-Encoding': 'gzip, deflate, br',
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Connection': 'keep-alive',
          'DNT': '1',
          'Origin': 'https://033bad1b-c8e2-4ee5-b8f8-f4c19c33ca37.ctfcloud.net',
          'Authorization': 'Bearer VCYEOUT8qwcOBm9g9xP_q4dJzwcZDnCwcp1i0jEsUUQ',
        },
      }
    );

    res.data = response.data.data;
  } catch (error) {
    res.error = true;
  }  
  return res;
}

export default useAPI;
