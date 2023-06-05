import * as React from "react";
import {Stack,Typography, Button } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { useParams } from "react-router-dom";
import CommentEditForm from "./CommentEditForm";

function DeleteModal() {
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
            <Button variant="contained"
                size="small">
              Confirm Delete
            </Button>
          </Box>
        </Box>
      </Modal>
    </Stack>
  );
}

export default DeleteModal;
