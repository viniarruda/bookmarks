import { 
  searchBookmarksRequest,
  searchBookmarksFulfilled,
  searchBookmarksRejected
} from './actions'

export const registerBookmarks = ({title, url, newTags}) => async (dispatch, getState) => {
  dispatch(searchBookmarksFulfilled({title, url, newTags}))
  return true
}
