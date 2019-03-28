import React, { useState } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { editBookmarks, removeTags } from '../../../../../store/bookmarks/thunks'
import dateFormat from 'dateformat'
import colors from '../../../../layout/styled-components/colors'
import EditForm from '../../containers/editForm'


const CardContent = styled.div`
  height: 150px;
  margin: 15px 15px;
  border-radius: 3px;
  box-shadow: 0px 10px 12px rgba(0,0,0,0.2);
  background-color: ${colors.white};
  position: relative;
  display: flex;
  flex-flow: column;
  padding: 15px;
  @media (max-width: 500px) {
    margin: 15px auto;
  }
  &:nth-child(1n) {
    background-image: ${colors.gradientGreen};
  }
  &:nth-child(2n) {
    background-image: ${colors.gradientBlue};
  }
  &:nth-child(3n) {
    background-image: ${colors.gradientPink};
  }
  &:nth-child(4n) {
    background-image: ${colors.gradientPurple};
  }
`;

const CardTop = styled.div`
  display: flex;
  flex-flow: row wrap;
`;

const CardBottom = styled.div`
  display: flex;
  flex-flow: row wrap;
  margin-top: 20px;
`;

const Grid = styled.div`
  flex: 1;
  display: flex;
  flex-flow: column;
`;

const Actions = styled.div`
  display: flex;
  flex-flow: row wrap;
`;

const Buttons = styled.div`
  background: #e6e6e6;
  margin: 5px;
  cursor: pointer;
`;
const Url = styled.a`
  
`;

const Tags = styled.div`
  display: flex;
  flex-flow: row wrap;
`;

const DeletTag = styled.span`
  position: absolute;
  top: 0;
  right: 2px;
  border-radius: 50%;
  background-color: red;
  width: 10px;
  height: 10px;
  cursor: pointer;
`;

const Tag = styled.div`
  border-radius: 10px;
  background: ${colors.default};
  padding: 5px;
  margin: 5px;
  max-width: 50px;
  text-align: center;
  position: relative;

`;

const Card = (props) => {
  const [edit, setEdit] = useState(false)

  const handleEditItem = () => {
    setEdit(edit ? false : true)
  }

  const handleSubmit = async ({title, url, tags}) => {
    let newTags = tags.split(" ");
    await setEdit(false)
    return await props.editBookmarks({title, url, newTags});
  };

  const handleDeletTag = async (tag, indexTag) => {
    const { index, removeTags } = props
    return await removeTags(tag, indexTag, index)
  }

  return (
    <CardContent>
      <CardTop>
        {props.title}
      </CardTop>
      {
        edit ?
          <EditForm index={props.index} onSubmit={handleSubmit}/>
          : 
          <CardBottom>
            <Grid>
              <Url>{props.url}</Url>
              <Tags>
                {
                props.tags && props.tags.map((tag,key) => 
                    <Tag key={key}><DeletTag onClick={() => handleDeletTag(tag, key)}></DeletTag>{tag}</Tag>
                  ) 
                }
              </Tags>
            </Grid>
            <Grid>
              <Actions>
                <Buttons onClick={() => handleEditItem()}>Editar</Buttons>
                <Buttons>Excluir</Buttons>
              </Actions>
            </Grid>
          </CardBottom>
      }
    </CardContent>
  )
}

export default connect(null, {
  editBookmarks,
  removeTags
})(Card);