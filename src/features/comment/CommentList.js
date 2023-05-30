import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

function CommentList({postId}) {
    const dispatch = useDispatch();
    
useEffect(() => {
    if (postId) dispatch(getComments({postId}));
}, [postId, dispatch])

  return (<div>
    <h6>CommentList</h6>
    </div>);
}

export default CommentList;
