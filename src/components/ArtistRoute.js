import React, { useEffect } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { fetchArtistProfile } from "../helpers/api-helpers";
import {
  requestArtistInfo,
  receiveArtistInfo,
  receiveArtistInfoError,
} from "../actions";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";

const ArtistRoute = () => {
  const dispatch = useDispatch();
  const { artistId } = useParams();
  const accessToken = useSelector((state) => state.auth.token);

  useEffect(() => {
    dispatch(requestArtistInfo());
    if (!accessToken) {
      dispatch(receiveArtistInfoError());
      return;
    } else {
      fetchArtistProfile(accessToken, artistId).then((res) => {
        console.log(res);
        dispatch(receiveArtistInfo(res));
      });
    }
  }, [accessToken]);

  return (
    <>
      {accessToken === null && "loading"}

      {accessToken !== null && <div>{accessToken}</div>}
    </>
  );
};

export default ArtistRoute;
