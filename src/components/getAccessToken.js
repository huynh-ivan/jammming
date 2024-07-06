import React from "react";

// This module will contain the logic to fetch a new access
// token from spotify's API 

const getAccessToken = () => {
  const baseUrl = ''
  fetch(baseUrl, {
    headers: {
      'method': 'GET',
      'authorization': `Bearer: `,
      'Content-type': 'application/json'
    },

  })
    .then(response => ({
      if(response.ok) {

    }
  }))
}