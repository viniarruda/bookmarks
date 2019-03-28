import { createAction } from "redux-actions";
import { 
	SEARCH_BOOKMARKS_REQUESTED,
	SEARCH_BOOKMARKS_FULFILLED,
	SEARCH_BOOKMARKS_REJECTED,
	CREATE_BOOKMARKS_REQUESTED,
	CREATE_BOOKMARKS_FULFILLED,
	CREATE_BOOKMARKS_REJECTED,
	BOOKMARK_UPDATED
} from "./action-types";

export const searchBookmarksRequest = createAction(SEARCH_BOOKMARKS_REQUESTED);
export const searchBookmarksFulfilled = createAction(SEARCH_BOOKMARKS_FULFILLED);
export const searchBookmarksRejected = createAction(SEARCH_BOOKMARKS_REJECTED);
export const createBookmarksRequest = createAction(CREATE_BOOKMARKS_REQUESTED);
export const createBookmarksFulfilled = createAction(CREATE_BOOKMARKS_FULFILLED);
export const createBookmarksRejected = createAction(CREATE_BOOKMARKS_REJECTED);
export const bookmarkUpdated = createAction(BOOKMARK_UPDATED)