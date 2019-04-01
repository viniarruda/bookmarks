import React from 'react'
import { connect } from 'react-redux'
import Loading from '../../layout/styled-components/spinner'
import { registerBookmarks, loadBookmarks, filter } from '../../../store/bookmarks/thunks'
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
import Error from '../../layout/styled-components/error'

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      search: false,
      filtering: false
    }
    this.handleSearch = this.handleSearch.bind(this)
    this.searchSubmit = this.searchSubmit.bind(this)
  }

  componentDidMount() {
    this.props.loadBookmarks();
  }

  handleSubmit = async ({title, url, tags}) => {
    return await this.props.registerBookmarks({title, url, tags});
  };

  handleCaptalize = (string) => {
    return string.toLowerCase();
  }

  searchSubmit = async ({term}) => {
    let ArrayFiltered = []
    let ArrayTags = []
    let findTags
    //if (term === undefined && !this.props.bookmarks.list) {
    //  this.props.loadBookmarks();
    //}
    if (term && this.props.bookmarks.list) {
      //ArrayFiltered = this.props.bookmarks.list.filter(f => f.title.includes(term)))
      ArrayTags = this.props.bookmarks.list.map(b => b.tags.filter(f => f.name.includes(this.handleCaptalize(term))))
      //ArrayFiltered = this.props.bookmarks.list.filter(i =>  i.tags.includes(ArrayTags))
      ArrayFiltered = this.props.bookmarks.list.filter(i =>  {
        
      })
      console.log(this.props.bookmarks.list)
    } else if (!term && !this.props.bookmarks.list) {
      return await this.props.loadBookmarks()
    }
    return await this.props.filter(ArrayFiltered)
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
                <SearchForm onChange={this.searchSubmit} onSubmit={this.searchSubmit} openSearch={() => this.handleSearch(false)} />
              </FilterContent>
            </FilterContainer> 
            : 
            <FilterContainer>
              <FilterContent>
                <Form onSubmit={this.handleSubmit} openSearch={() => this.handleSearch(true)}/>
              </FilterContent>
            </FilterContainer>
        }

        {
          bookmarks.error && <div>{bookmarks.error}</div>
        }
        <List>
          {
            bookmarks.list &&
              bookmarks.list.map((i) => 
                <Card key={i.id} id={i.id} title={i.title} url={i.url} tags={i.tags} />
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
  registerBookmarks,
  filter
})(Home)