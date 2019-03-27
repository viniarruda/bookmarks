import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loadCommits } from '../../../store/github/thunks'
import Content from './containers/content'
import CommitList from './components/commitList'
import CommitItem from './components/commitItem'
import Title from '../../layout/styled-components/title'
import Flex from './components/flex'
import LinkBack from './components/linkBack'

class Post extends Component {
  
  componentDidMount() {
    const { match, github, loadCommits } = this.props
    loadCommits(github.user,match.params.name)
  }

  render() {
   const { github } = this.props

    return (
      <Content>
        <Flex>
          <LinkBack to='/'>
            <i className="fa fa-caret-left" />
            Back 
          </LinkBack>
          <Title>Commits list</Title>
        </Flex>

        {console.log(github.commits)}
        <CommitList>
          {
            github.commits &&
              github.commits.map((commit, key) =>
                key < 20 &&
                  <CommitItem key={key} {...commit} />
              )
          }
        </CommitList>
      </Content>
    )
  }
}

const mapStateToProps = (state) => ({
  github: state.github
})

export default connect(mapStateToProps, {
  loadCommits
})(Post)