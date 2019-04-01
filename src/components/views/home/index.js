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
import SearchForm from './containers/searchForm'


class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      search: false
    }
    this.handleSearch = this.handleSearch.bind(this)
  }

  componentDidMount() {
    //this.props.loadBookmarks();
  }

  handleSubmit = async ({title, url, tags}) => {
    return await this.props.registerBookmarks({title, url, tags});
  };

  searchSubmit = async () => {
    console.log('search')
  }

  handleSearch(param) {
    this.setState({
      search: param
    })
  }

  render() {
    const { bookmarks } = this.props

    return (
      <Content>
        <Loading show={bookmarks.loading} />
        {
          this.state.search ?
            <FilterContainer>
              <FilterContent>
                <Icon className="fa fa-plus" padding='true' onClick={() => this.handleSearch(false)} />
                <SearchForm onSubmit={this.searchSubmit}/>
              </FilterContent>
            </FilterContainer> 
            : 
            <FilterContainer>
              <FilterContent>
                <Icon className="fa fa-search" onClick={() => this.handleSearch(true)} /> 
                <Form onSubmit={this.handleSubmit}/>
              </FilterContent>
            </FilterContainer>
        }

        {
          bookmarks.error && <div>{bookmarks.error}</div>
        }
        <List>
          {
            bookmarks.list &&
              bookmarks.list.map((i, key) => 
                <Card key={key} id={i.id} title={i.title} url={i.url} tags={i.tags} />
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