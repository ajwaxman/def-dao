import React from "react";
import styled from "styled-components";

function Member({username, avatar_url}) {
    return(
        <MemberWrapper>
            <Avatar src={avatar_url}></Avatar>
            <span>{username}</span>
        </MemberWrapper>
    )
}

const MemberWrapper = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
  span {
    margin-left: 16px;
  }
`
const Avatar = styled.img`
    width: 36px;
    border-radius: 100px;
`

export default Member;