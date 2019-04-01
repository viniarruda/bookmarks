import { 
  searchBookmarksRequest,
  searchBookmarksFulfilled,
  searchBookmarksRejected,
  createBookmarksRequest,
  createBookmarksFulfilled,
  createBookmarksRejected,
  deleteBookmarksRequest,
  deleteBookmarksFulfilled,
  deleteBookmarksRejected,
  deleteTagRequest,
  deleteTagFulfilled,
  deleteTagRejected,
  bookmarkUpdated,
  filterBookmark
} from './actions'
import { searchBookmarks, createBookmarks, deleteBookmark, deleteTagging } from './queries'
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
  dispatch(createBookmarksRequest())
  let newTags = tags.toLowerCase().split(" ");
  const response = await createBookmarks({title, url, newTags})
  
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

export const removeTags = (idBookmark, idTag) => async (dispatch, getState) => {
  dispatch(deleteTagRequest())
  const response = await deleteTagging(idBookmark, idTag)

	if(!response) {
    const error = 'Não foi possível deletar'
    dispatch(deleteTagRejected(error))

    throw 'Error' 
  }

  dispatch(deleteTagFulfilled(response))
	return true
}

export const filter = (bookmarks) => async (dispatch, getState) => {
  dispatch(bookmarkUpdated(bookmarks))

  dispatch(filterBookmark('Bookmark não encontrado'))
  return true
}

export const deleteBookmarks = (id) => async (dispatch, getState) => {
  dispatch(deleteBookmarksRequest())
  const response = await deleteBookmark(id)
  
  if(!response) {
    const error = 'Não foi possível deletar'
    dispatch(deleteBookmarksRejected(error))

    throw 'Error' 
  }

  dispatch(deleteBookmarksFulfilled(response))
  return true
}