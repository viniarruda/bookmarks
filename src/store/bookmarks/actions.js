import { createAction } from "redux-actions";
import { 
	SEARCH_BOOKMARKS_REQUESTED,
	SEARCH_BOOKMARKS_FULFILLED,
	SEARCH_BOOKMARKS_REJECTED,
	CREATE_BOOKMARKS_REQUESTED,
	CREATE_BOOKMARKS_FULFILLED,
	CREATE_BOOKMARKS_REJECTED,
	DELETE_BOOKMARKS_REQUESTED,
	DELETE_BOOKMARKS_FULFILLED,
	DELETE_BOOKMARKS_REJECTED,
	DELETE_TAG_REQUESTED,
	DELETE_TAG_FULFILLED,
	DELETE_TAG_REJECTED,
	BOOKMARK_UPDATED,
	FILTER_BOOKMARK
} from "./action-types";

export const searchBookmarksRequest = createAction(SEARCH_BOOKMARKS_REQUESTED);
export const searchBookmarksFulfilled = createAction(SEARCH_BOOKMARKS_FULFILLED);
export const searchBookmarksRejected = createAction(SEARCH_BOOKMARKS_REJECTED);

export const createBookmarksRequest = createAction(CREATE_BOOKMARKS_REQUESTED);
export const createBookmarksFulfilled = createAction(CREATE_BOOKMARKS_FULFILLED);
export const createBookmarksRejected = createAction(CREATE_BOOKMARKS_REJECTED);

export const deleteBookmarksRequest = createAction(DELETE_BOOKMARKS_REQUESTED);
export const deleteBookmarksFulfilled = createAction(DELETE_BOOKMARKS_FULFILLED);
export const deleteBookmarksRejected = createAction(DELETE_BOOKMARKS_REJECTED);

export const deleteTagRequest = createAction(DELETE_TAG_REQUESTED);
export const deleteTagFulfilled = createAction(DELETE_TAG_FULFILLED);
export const deleteTagRejected = createAction(DELETE_TAG_REJECTED);

export const bookmarkUpdated = createAction(BOOKMARK_UPDATED)
export const filterBookmark = createAction(FILTER_BOOKMARK)