import { createAction } from "redux-actions";
import { 
	SEARCH_BOOKMARKS_REQUESTED,
	SEARCH_BOOKMARKS_FULFILLED,
	SEARCH_BOOKMARKS_REJECTED
} from "./action-types";

export const searchBookmarksRequest = createAction(SEARCH_BOOKMARKS_REQUESTED);
export const searchBookmarksFulfilled = createAction(SEARCH_BOOKMARKS_FULFILLED);
export const searchBookmarksRejected = createAction(SEARCH_BOOKMARKS_REJECTED);