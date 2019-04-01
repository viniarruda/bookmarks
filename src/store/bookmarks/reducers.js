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

const INITIAL_STATE = {
  loading: false,
  list: null,
  error: null,
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SEARCH_BOOKMARKS_REQUESTED:
    case CREATE_BOOKMARKS_REQUESTED:
    case DELETE_BOOKMARKS_REQUESTED:
    case DELETE_TAG_REQUESTED: {
      return {
        ...state,
        loading: true,
        list: null,
        error: null
      };
    }
    case SEARCH_BOOKMARKS_FULFILLED:
    case CREATE_BOOKMARKS_FULFILLED:
    case DELETE_BOOKMARKS_FULFILLED:
    case DELETE_TAG_FULFILLED: {
      return {
        ...state,
        loading: false,
        list: action.payload,
        error: null,
      };
    }
    case SEARCH_BOOKMARKS_REJECTED:
    case CREATE_BOOKMARKS_REJECTED:
    case DELETE_BOOKMARKS_REJECTED:
    case DELETE_TAG_REJECTED:
    case FILTER_BOOKMARK: {
      return {
        ...INITIAL_STATE,
        error: action.payload
      };
    }
    case BOOKMARK_UPDATED: {
      return {
        ...state,
        list: action.payload
      }
    }

    default:
      return state;
  }
}
