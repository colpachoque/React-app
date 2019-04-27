export const SEARCH_BY_CHANGED = "SEARCH_BY_CHANGED",
  SEARCH_INIT = "SEARCH_INIT",
  MOVIES_FOUND = "MOVIES_FOUND",
  SORT_BY_CHANGED = "SORT_BY_CHANGED";

export const searchByChanged = searchBy => ({
  type: SEARCH_BY_CHANGED,
  searchBy
});

export const sortByChanged = sortBy => ({
  type: SORT_BY_CHANGED,
  sortBy
});

export const search = searchTerm => ({
  type: SEARCH_INIT,
  searchTerm
});

export const updateSearchBy = searchBy => dispatch => {
  dispatch(searchByChanged(searchBy));
};

export const searchInit = searchTerm => dispatch => {
  dispatch(search(searchTerm));
};

export const updateSortBy = sortBy => dispatch => {
  dispatch(sortByChanged(sortBy));
};
