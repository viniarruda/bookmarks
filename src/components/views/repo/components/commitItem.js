import React, { useState } from 'react'
import styled from 'styled-components'
import Accordion from './accordion'

const CommitItem = styled.div`
  border: 1px solid #000;
  border-radius: 3px;
  margin: 10px 0;
  width: 600px;
  display: flex;
  flex-flow: column;
  box-shadow: 0 10px 12px rgba(0,0,0,0.1);
  @media (max-width: 500px) {
    width: 100%;
  }
`;

const CommitHeader = styled.div`
  display: flex;
  flex-flow: row wrap;
  padding: 10px 15px;
  align-items: center;
`;

const CommitAuthor = styled.h1`
  flex-grow: 1;
  flex-shrink: 0;
  flex-basis: 40%;
`;

const ArrowIcon = styled.i`
  flex-grow: 1;
  flex-shrink: 0;
  flex-basis: 30%;
  text-align: right;
`;

const CommitAvatar = styled.div`
  flex-grow: 1;
  flex-shrink: 0;
  flex-basis: 30%;
`;

const Avatar = styled.img`
  border-radius: 50%;
  height: 40px;
  width: auto;
`;

const Item = (props) => {

  const [open, setAccordion] = useState(false)

  const handleOpenAccordion = () => {
    setAccordion(open === false ? true : false)
  }

  return (
    <CommitItem>
      <CommitHeader>
        <CommitAvatar>
          <Avatar src={props.author ? props.author.avatar_url : props.commit.author.avatar_url} />
        </CommitAvatar>
        <CommitAuthor>Author: {props.author ? props.author.login : props.commit.author.name}</CommitAuthor>
        <ArrowIcon className={open ? 'fa fa-sort-up' : 'fa fa-sort-down'} onClick={() => handleOpenAccordion()}/>
      </CommitHeader>
      { open && 
        <Accordion sha={props.sha} url={props.html_url} message={props.commit.message} />
      }
    </CommitItem>
  )
}


export default Item