import { Avatar, IconButton, Stack, TextField } from "@mui/material";
import React,  {useState} from "react";
import {SendIcon} from '@mui/icons-material'
import useAuth from '../../hooks/useAuth'

function CommentForm() {
    const [content, setContent] = useState("");
    const {user} = useAuth();

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(content)
    }


  return (
  <form onSubmit={handleSubmit}>
    <Stack direction='row' alignItems='center'>
        <Avatar src={user.avatarUrl} alt={user.name}/>
        <TextField 
        fullWidth
        size="small"
        value={content}
        placeholder="Write a comment..."
        onChange={(event) => setContent(event.target.value)}
        sx={{
            ml: 2,
            mr: 1,
            "& fieldset": {
                borderWidth: `1px !important`,
                borderColor: (theme) => `${theme.palette.grey[500_32]} !important`,
            }
        }}
        />
        <IconButton>
            <SendIcon sx={{fontSize: 30}}/>
        </IconButton>
    </Stack>
    </form>);
}

export default CommentForm;
