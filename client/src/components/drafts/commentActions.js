export const AddComment = comment=>{
    return {
      type: 'ADD_COMMENT',
      comment: comment
    }

}

export const FetchComments =()=> {
    return {
        type: 'FETCH_COMMENTS',        
    }
}

export const DeleteComments = id =>{
    return {
        type: 'DELETE_COMMENTS',
        id: id
    }

}