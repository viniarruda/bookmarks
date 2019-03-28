import { 
  searchBookmarksRequest,
  searchBookmarksFulfilled,
  searchBookmarksRejected,
  createBookmarksRequest,
  createBookmarksFulfilled,
  createBookmarksRejected,
  bookmarkUpdated
} from './actions'
import { searchBookmarks, createBookmarks } from './queries'
import { reset } from 'redux-form'


export const loadBookmarks = () => async (dispatch, getState) => {
  dispatch(searchBookmarksRequest())
  const response = await searchBookmarks()
  
  if(!response) {
    const error = 'Sem bookmarks'
    dispatch(searchBookmarksRejected(error))

    throw 'Error' 
  }
  let r = response.map(i => {
  	if (i.tags) {
  		i.tags.split(' ')
  	}
  	return i
  })
  dispatch(searchBookmarksFulfilled(r))
  return true
}

export const registerBookmarks = ({title, url, tags}) => async (dispatch, getState) => {
	console.log('teste', title, url, tags)
  dispatch(createBookmarksRequest())
  const response = await createBookmarks({title, url, tags})
  
  if(!response) {
    const error = 'Cadastro não efetivado'
    dispatch(createBookmarksRejected(error))

    throw 'Error' 
  }
  let r = response.map(i => {
  	if (i.tags) {
  		i.tags.split(" ")
  	}
  	return i
  })
  console.log('aaaaaaaaaaa', r)
  dispatch(createBookmarksFulfilled(r))
  dispatch(reset('bookmarksForm'))
  return true
}

export const editBookmarks = ({title, url, newTags}) => async (dispatch, getState) => {
	const { bookmarks: { list }
		} = getState();

	let newInfos = list.map(i => {
		if (i.title === title) {
			i.title = title
			i.url = url
			i.newTags = newTags
		}
		return i
	})
	dispatch(bookmarkUpdated(newInfos))
	dispatch(reset('editForm'))
  return true
}
export const removeTags = (tag, indexTag, index) => async (dispatch, getState) => {
	const { bookmarks: { list }
		} = getState();

	let newInfos = list.map(i => {
		if (i.newTags[indexTag] === tag) {
			i.newTags.splice(indexTag, 1)
		}
		return i
	})

	dispatch(bookmarkUpdated(newInfos))
	return true
}