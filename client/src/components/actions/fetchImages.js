import { AddArtwork, AddArtworks, DeleteArtWork } from './artworkActions'

// export function fetchImages() {
//     let imgs=[]
//     const fetchingImgs = fetch(`https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=d8685da58d328c30a1e78b2a68d64131&photoset_id=72157672941005002&user_id=115389063%40N04&extras=license%2C+date_upload%2C+date_taken%2C+owner_name%2C+icon_server%2C+original_format%2C+last_update%2C+geo%2C+tags%2C+machine_tags%2C+o_dims%2C+views%2C+media%2C+path_alias%2C+url_sq%2C+url_t%2C+url_s%2C+url_m%2C+url_o&format=json&nojsoncallback=1&api_sig=795a4b5bac61c5f94a20c0603670bf6f`)
//                .then(res => res.json()).catch(err=>console.log(err))        
//                .then(data => {                
//                 imgs=data.photoset.photo.map(img=>({link: img.url_s, text: img.title, zoom_link: img.url_o, id: img.id}))
//             })
//     //debugger
//     return {
//       type: 'ADD_ARTWORKS',
//       artworks: imgs
//     };
//   }

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
  