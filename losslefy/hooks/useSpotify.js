import { useEffect } from "react";
import { signIn, useSession } from "next-auth/react";
import SpotifyWebApi from "spotify-web-api-node";

const SpotifyApi = new SpotifyWebApi({
    clientId: process.env.NEXT_PUBLIC_CLIENT_ID,
    clientSecret: process.env.NEXT_PUBLIC_CLIENT_SECRET,
});

const useSpotify = () => {
    const {data: session, status} = useSession();

    useEffect(() => {
        if(session){
            // If refresh access token attempt fails, redirect user
            if(session.error === 'RefershAccessTokenError'){
                signIn();
            }
            SpotifyApi.setAccessToken(session.user.accessToken);
        }
    },[session])

return SpotifyApi;
}

export default useSpotify;