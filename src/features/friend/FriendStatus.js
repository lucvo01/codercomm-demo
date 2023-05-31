import React from "react";

function FriendStatus({ currentUserId, targetUserId, friendship, sx }) {
  if (currentUserId === targetUserId) return null;
  if (!friendship) return null;

  if (friendship.status === "accepted") {
    return (
      <Chip sx={{ ...sx }} icon={<CheckCircleOutlineRoundedIcon />} label="Friend" color='success' />
    );
  }

  if (friendship.status === "declined") {
    return (
      <Chip
        sx={{ ...sx }}
        icon={<DoNotDisturbAltRoundedIcon />}
        label="Declined"
        color="error"
      />
    );
  }

    if (friendship.status === "pending") {
        const {from, to} = friendship;

        if(from === currentUserId && to === targetUserId){
             return (
               <Chip
                 sx={{ ...sx }}
                 icon={<MarkEmailReadRoundedIcon />}
                 label="Friend"
                 color="warning"
               />
             );
        } else if ( from === targetUserId && to === currentUserId){
             return (
               <Chip
                 sx={{ ...sx }}
                 icon={<PauseCircleOutlineRoundedIcon />}
                 label="Waiting for response"
                 color="warning"
               />
             );
        }
     
    }

}

export default FriendStatus;
