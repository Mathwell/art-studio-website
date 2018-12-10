import { AddArtwork, AddArtworks, DeleteArtWork, ChangeArtwork } from './artworkActions'


  export function fetchImages(query="") {
    let imgs;

    return (dispatch) => {
      dispatch({ type: "LOADING_IMAGES" });
      return fetch(`/artworks?q=${query}`)
        .then(response => response.json())
        .then(data => {
          imgs=data.map(img=>({link: img.url_s, text: img.title, zoom_link: img.url_o, id: img.id}))
          dispatch(AddArtworks(imgs))
        });
    };
  }

  
  export function postImage(data={}) {
    let img;    
    let body = JSON.stringify({artwork: {title: data.title, url_s: data.url_s} })

    return (dispatch) => {
      dispatch({ type: "POSTING_IMAGES" });
      return fetch(`/artworks`, {
        method: "POST", // *GET, POST, PUT, DELETE, etc.        
        headers: {
            "Content-Type": "application/json; charset=utf-8",              
        },          
        body: body,
    })
        .then(response => response.json())
        .then(data => {
          //debugger
          img={link: data.url_s, text: data.title, zoom_link: data.url_o, id: data.id}
          dispatch(AddArtwork(img))
        });
    };
  }
  
  
  export function deleteImage(id) {
    //debugger
    return (dispatch) => {
      dispatch({ type: "POSTING_IMAGES" });
      return fetch(`/artworks/`+id, {
        method: "DELETE", // *GET, POST, PUT, DELETE, etc.        
        headers: {
            "Content-Type": "application/json; charset=utf-8",              
        },                  
    })
        .then(response => response.json())
        .then(data => {   
          dispatch(DeleteArtWork(id))
        });
    };
  }

  export function editImage(data={}) {
    let img;    
    let body = JSON.stringify({artwork: {title: data.title, url_s: data.url_s, url_o: data.url_o} })
    //debugger
    return (dispatch) => {
      dispatch({ type: "POSTING_CHANGES" });
      return fetch(`/artworks/`+data.id, {
        method: "PATCH", // *GET, POST, PUT, DELETE, etc.        
        headers: {
            "Content-Type": "application/json; charset=utf-8",              
        },          
        body: body,
    })
        .then(response => response.json())
        .then(data => {
          //debugger
          img={link: data.url_s, text: data.title, zoom_link: data.url_o, id: data.id}
          dispatch(ChangeArtwork(img))
        });
    };
  }
  