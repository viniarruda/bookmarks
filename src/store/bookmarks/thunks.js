import { 
  searchBookmarksRequest,
  searchBookmarksFulfilled,
  searchBookmarksRejected,
  bookmarkUpdated
} from './actions'
import { reset } from 'redux-form'

export const registerBookmarks = ({title, url, newTags}) => async (dispatch, getState) => {
  dispatch(searchBookmarksFulfilled({title, url, newTags}))
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