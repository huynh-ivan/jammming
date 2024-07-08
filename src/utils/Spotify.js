let accessToken = '';

const Spotify = {
  getAccessToken() {
    if (accessToken) {
      return accessToken;
    }

    const tokenMatch = window.location.href.match(/access_token=([^&]*)/);
    const expireMatch = window.location.href.match(/expires_in=([^&]*)/);

    if (tokenMatch && expireMatch) {
      accessToken = tokenMatch[1] // store the accessToken
      const expiresIn = Number(expireMatch[1]) //store the expireTime
      window.setTimeout(() => accessToken = '', expiresIn * 1000);

      window.history.pushState('Access Token', null, '/'); // This clears the parameters, allowing us to grab a new access token when it expires.
      return accessToken;
    } else {
      const baseUrl = 'https://accounts.spotify.com/authorize?'
      const clientId = 'e92b697cdd094a5988e91a83b852f3f4';
      const redirectUri = 'http://localhost:3000/';
      const fullUrl = `${baseUrl}client_id=${clientId}&redirect_uri=${redirectUri}&response_type=token&scope=playlist-modify-public`

      window.location = fullUrl
    }
  },

  search(userQuery) {
    const accessToken = Spotify.getAccessToken()
    const limit = encodeURI(20)
    const type = encodeURIComponent('track')
    const Url = `https://api.spotify.com/v1/search?q=${userQuery}&type=track`

    return fetch(Url, { // make the request
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    })
      .then(response => {
        return response.json()
      })
      .then(jsonResponse => {
        if (!jsonResponse.tracks) {
          return [];
        }
        console.log(jsonResponse)
        return jsonResponse.tracks.items.map(item => ({
          id: item.id,
          album: item.album.name,
          artist: item.album.artists[0].name,
          name: item.name,
          uri: item.uri
        }));
      });
  },

  savePlaylist(name, trackUris) {
    if (!name || !trackUris) {
      return;
    }

    const accessToken = Spotify.getAccessToken()
    const headers = { Authorization: `Bearer ${accessToken}` };
    let userId;

    return fetch("https://api.spotify.com/v1/me", { headers: headers }
    ).then(response => response.json()
    ).then(jsonResponse => {
      userId = jsonResponse.id;
      return fetch(`https://api.spotify.com/v1/users/${userId}/playlists`, {
        headers: headers,
        method: 'POST',
        body: JSON.stringify({ name: name })
      }
      ).then(response => response.json()
      ).then(jsonResponse => {
        const playlistId = jsonResponse.id;
        return fetch(`https://api.spotify.com/v1/users/${userId}/playlists/${playlistId}/tracks`, {
          headers: headers,
          method: 'POST',
          body: JSON.stringify({ uris: trackUris })
        });
      });
    });
  }
};

export default Spotify;