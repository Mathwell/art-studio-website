import cuid from 'cuid';
export const cuidFn = cuid;

let id=0;

export default function manageArtworks(state = {
    artworks: [],
    comments: [],
  }, action) {
    
    switch (action.type) {
        case 'ADD_ARTWORK':
        const artwork = { text: action.artwork.text, link: action.artwork.link, id: cuidFn() };
        return Object.assign({}, state, { 
            artworks: state.artworks.concat(artwork),
        });
        // case 'ADD_ARTWORKS':
        // const artworks = action.artworks;
        // return Object.assign({}, state, { artworks});

        case 'FETCH_IMAGES':
        const artworks = action.artworks;
        return Object.assign({}, state, { artworks});        

        case 'DELETE_ARTWORK':
            const artworksFiltered = state.artworks.filter(artwork => artwork.id !== action.id);
            return Object.assign({}, state, { artworksFiltered });

        case 'ADD_COMMENT':            
            const comment = Object.assign({}, action.comment, { id: cuidFn() });
            debugger
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