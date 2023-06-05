import * as React from "react";
import Stack from "@mui/material/Stack";
import { useNavigate, useLocation } from "react-router-dom";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { useParams } from "react-router-dom";
import { Typography } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { useDispatch } from "react-redux";
import { deleteComment } from "./commentSlice";

function CommentDeleteModal() {
  const { commentId, postId } = useParams();
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleClose = () => {
    navigate(-1);
  };
  const handleClick = () => {
    dispatch(
      deleteComment({
        postId,
        commentId
      })
    );
    handleClose();
  };

  return (
    <Stack>
      <Modal
        open={true}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Typography variant="subtitle" sx={{ color: "text.secondary" }}>
          Do you want to delete comment?
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end"
          }}
        >
          <LoadingButton
            type="submit"
            variant="contained"
            size="small"
            // loading={isSubmitting || isLoading}
            onClick={handleClick}
          >
            Confirm Delete
          </LoadingButton>
        </Box>
      </Modal>
    </Stack>
  );
}

export default CommentDeleteModal;