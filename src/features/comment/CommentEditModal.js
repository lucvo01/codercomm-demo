import * as React from "react";
import Stack from "@mui/material/Stack";
import { useNavigate, useLocation } from "react-router-dom";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { useParams } from "react-router-dom";
import CommentEditForm from "./CommentEditForm";

function CommentEditModal() {
  const { commentId, postId } = useParams();
  const navigate = useNavigate();
  //   const location = useLocation();

  //   let from = location.state?.backgroundLocation
  //     ? location.state.backgroundLocation
  //     : "/";

  const handleClose = () => {
    navigate(-1);
  };
  return (
    <Stack>
      <Modal
        open={true}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box>
          <CommentEditForm
            commentId={commentId}
            postId={postId}
            // post={post}
            // callback={() => {
            //   navigate(location.pathname, {
            //     state: { backgroundLocation: from }
            //   });
            // }}
          />
        </Box>
      </Modal>
    </Stack>
  );
}

export default CommentEditModal;
