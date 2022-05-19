import { atom } from "recoil";

const playlistState = atom({
    key: "playlistState",
    default: null
});

 export const playlistIdState = atom({
    key: "playlistIdState",
    default: '3RLhKG9DkMby5eH3lvfD7n'
});
export default playlistIdState;
export {playlistState};