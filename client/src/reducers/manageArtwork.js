import cuid from 'cuid';
export const cuidFn = cuid;

let id=0;

export default function manageArtworks(state = {
    artworks: [],
    comments: [],
  }, action) {
    let artworks=[]
    //debugger
    switch (action.type) {
        case 'ADD_ARTWORK':
        //debugger
        const artwork = { text: action.artwork.text, link: action.artwork.link, id:action.artwork.id };
        artworks=state.artworks.concat(artwork)
        return Object.assign({}, state, { artworks });
        
        case 'FETCH_IMAGES':
        artworks = action.artworks;
        return Object.assign({}, state, { artworks});        

        case 'DELETE_ARTWORK':
        //debugger
        artworks = state.artworks.filter(art => art.id != action.id);
    
            return Object.assign({}, state, { artworks });

        case 'ADD_COMMENT':            
            const comment = Object.assign({}, action.comment, { id: cuidFn() });
            //debugger
            return Object.assign({}, state, {
              comments: state.comments.concat(comment),
            });                
            
            case 'DELETE_COMMENT':
            const comments = state.comments.filter(comment => comment.id !== action.id);
            return Object.assign({}, state, { comments });

        default:
          return state;
}
  }