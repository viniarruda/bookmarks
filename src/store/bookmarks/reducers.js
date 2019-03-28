import { 
  SEARCH_BOOKMARKS_REQUESTED, 
  SEARCH_BOOKMARKS_FULFILLED, 
  SEARCH_BOOKMARKS_REJECTED,
  BOOKMARK_UPDATED,
} from "./action-types";

const INITIAL_STATE = {
  loading: false,
  list: [],
  error: null,
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SEARCH_BOOKMARKS_REQUESTED: {
      return {
        ...state,
        loading: true,
        list: null,
        error: null
      };
    }
    case SEARCH_BOOKMARKS_FULFILLED: {
      return {
        ...state,
        loading: false,
        list: [...state.list, action.payload],
        error: null,
      };
    }
    case SEARCH_BOOKMARKS_REJECTED: {
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
