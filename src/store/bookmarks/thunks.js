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

  dispatch(searchBookmarksFulfilled(response))
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

  dispatch(createBookmarksFulfilled(response))
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
export const removeTags = (tag, id) => async (dispatch, getState) => {
	const { bookmarks: { list }
		} = getState();

	let r;
  let newInfos = list.map(i => {
		if (i.id === id) {
      r = i.tags.replace(tag)
		}
		return i
	})
  console.log(newInfos, r)
  let t = list.find(l => l.id === id)
  t.tags = r;
  console.log('test', t)
  list[id] = t;
	dispatch(bookmarkUpdated(list))
	return true
}