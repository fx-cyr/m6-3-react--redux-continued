export const requestAccessToken = () => ({
  type: "REQUEST_ACCESS_TOKEN",
});

export const receiveAccessToken = (data) => ({
  type: "RECEIVE_ACCESS_TOKEN",
  data,
});

export const receiveAccessTokenError = () => ({
  type: "RECEIVE_ACCESS_TOKEN_ERROR",
});

export const requestArtistInfo = () => ({
  type: "REQUEST_ARTIST_INFO",
});

export const receiveArtistInfo = (data) => ({
  type: "RECEIVE_ARTIST_INFO",
  data,
});

export const receiveArtistInfoError = () => ({
  type: "RECEIVE_ARTIST_INFO_ERROR",
});
