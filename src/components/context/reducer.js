export const initialstate = {
    userinfo:null,
    playlist:[],
    playing:false,
    songs:[],
    item:null,
    token:null,
    // token:'BQALBfXvB_gfYB8B-iFxQPgA2S3W5pdim4cda4qapTmY2H__ZILKqy0WjaLDvrTbkrkrD5UZ0a52-vNQ7qOxjD186gJd5I1dCy2-6RTdhFUJFa4UQ51zylNPz2ujzsrM3yNTA40NEI0mOihQzbk96TYJ4R5htSxF3ouuv8HNGOHS8acsGnCs'

} 

const reducer = (state,action)=>{
    switch (action.type) {
        case "SET_USER":
            
            return {...state,
                userinfo:action.user}

        case "SET_TOKEN":
            return{
                ...state,
                token:action.token
            }
        case "SET_PLAYLIST":
            return{
                ...state,
                playlist:action.userPlaylist
            }
        case "SET_SONGS":
            return{
                ...state,
                songs:action.songs
            }
        default:
            return state;
    }
}

export default reducer