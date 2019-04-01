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
  width: 100%;
  background-color: ${colors.white};
  position: relative;
  display: flex;
  flex-flow: row wrap;
  padding: 15px;
  border-bottom: 1px solid ${colors.gray};
  &:last-child {
    border-bottom: none;
  }
  @media (max-width: 500px) {
    margin: 15px auto;
  }
`;

const Title = styled.h1`
  font-size: 18px;
  font-weight: 500;
  padding: 5px 0;
  color: ${colors.black};
`;

const Grid = styled.div`
  flex: 1;
  display: flex;
  flex-flow: column;
  align-items: ${props => props.align};
  justify-content: center;
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
  color: ${colors.links};
  margin: 5px 0;
`;

const Tags = styled.div`
  display: flex;
  flex-flow: row wrap;
`;

const DeletTag = styled.span`
  font-size: 18px;
  cursor: pointer;
`;

const Close = styled.i`
  margin: 0 5px`;

const Tag = styled.div`
  border-radius: 3px;
  background: ${colors.default};
  color: ${colors.white};
  text-transform: uppercase;
  padding: 5px;
  margin: 5px;
  text-align: center;
  display: flex;
  flex-flow: row;
  justify-content: center;
  align-items: center;
  font-size: 13px;
  &:first-child {
    margin-left: 0;
  }
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

  const handleDeletTag = async (tag) => {
    const { removeTags, id } = props
    return await removeTags(tag, id)
  }

  return (
    <CardContent>
      {
        edit ?
          <Grid>
            <EditForm id={props.id} onSubmit={handleSubmit}/>
          </Grid> 
          : 
          <Grid>
            <Title>{props.title}</Title>
            <Url>{props.url}</Url>
              <Tags>
                {
                  props.tags && props.tags.map((tag, key) => 
                    <Tag key={key}>
                      {tag}
                      <DeletTag onClick={() => handleDeletTag(tag)}><Close className="fa fa-times"/></DeletTag>
                    </Tag>
                  )
                }
              </Tags>
          </Grid>
      }
        <Grid align="flex-end">
          <Actions>
            <i className="fa fa-edit"  onClick={() => handleEditItem()}>Editar</i>
            <i className="fa fa-trash" />
          </Actions>
        </Grid>
    </CardContent>
  )
}

export default connect(null, {
  editBookmarks,
  removeTags
})(Card);