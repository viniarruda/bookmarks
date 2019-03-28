import React from 'react'
import { connect } from 'react-redux'
import Loading from '../../layout/styled-components/spinner'
import { registerBookmarks, loadBookmarks } from '../../../store/bookmarks/thunks'
import Content from './containers/content'
import Form from './containers/form'
import List from './components/list/list'
import Card from './components/list/listCard'
import FilterContainer from './components/filter/container'
import FilterContent from './components/filter/content'
import Filters from './components/filter/filters'
import FilterIcon from './components/filter/filterIcon'
import Icon from '../../layout/styled-components/icon'


class Home extends React.Component {

  componentDidMount() {
    this.props.loadBookmarks();
  }

  handleSubmit = async ({title, url, tags}) => {
    return await this.props.registerBookmarks({title, url, tags});
  };


  render() {
    const { bookmarks } = this.props

    return (
      <Content>
        <Loading show={bookmarks.loading} />
        <FilterContainer>
          <FilterContent>
            <Form onSubmit={this.handleSubmit}/>
          </FilterContent>
        </FilterContainer>
        {
          console.log(bookmarks)
        }
        <List>
          {
            bookmarks.list &&
              bookmarks.list.map((i, key) => 
                <Card key={key} index={key} title={i.title} url={i.url} tags={i.tags} />
              )
          }
        </List>
      </Content>
    )
  }
}

const mapStateToprops = (state) => ({
  bookmarks: state.bookmarks
})

export default connect(mapStateToprops, {
  loadBookmarks,
  registerBookmarks
})(Home)