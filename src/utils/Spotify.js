import React from "react";

const clientId = 'e92b697cdd094a5988e91a83b852f3f4';
const redirectUri = 'http://localhost:3000/callback';
let accessToken;

const Spotify = {
  //Spotify is a utility object containing methods for 
  //Getting an access token via implicit grant
  //Making requests to the Search API
  //Making requests to the Playlist API


  //Get access token
  getAccessToken() {
    const baseUrl = 'https://accounts.spotify.com/authorize?'
    const responseType = 'token'
    const fullUrl = `${baseUrl}client_id=${clientId}&redirect_uri=${redirectUri}&response_type=${responseType}`

    const tokenMatch = window.location.href.match(/access_token=([^&]*)/);
    const expireMatch = window.location.href.match(/expires_in=([^&]*)/);

    if (accessToken) { // return the accessToken if available
      return accessToken
    }

    if (tokenMatch && expireMatch) {
      const accessToken = tokenMatch[1] // store the accessToken
      const expiresIn = Number(expireMatch[1]) //store the expireTime
      console.log(accessToken)
      console.log(expiresIn)
      window.setTimeout(() => accessToken = '', expiresIn * 1000)

      window.history.pushState('Access Token', null, '/'); // This clears the parameters, allowing us to grab a new access token when it expires.

      return accessToken;
    } else {
      window.location = fullUrl
    }
  },

  search(userQuery) {
    const accessToken = Spotify.getAccessToken()
    const limit = encodeURI(20)
    const type = encodeURIComponent('track')
    const Url = `https://api.spotify.com/v1/search?q=${userQuery}&type=${type}`

    return fetch(Url, { // make the request
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    })
      .then(response => {
        return response.json()
      })
      .then(jsonResponse => {
        console.log(jsonResponse)
        return jsonResponse.tracks.items.map(item => ({
          id: item.id,
          album: item.album.name,
          artist: item.album.artists[0].name,
          name: item.name,
          uri: item.uri
        }));
      });
  }

};

export default Spotify;