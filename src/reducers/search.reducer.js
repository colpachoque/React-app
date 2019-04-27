export default function search(
  state = { searchBy: "title", searchTerm: "", sortBy: "release-date" },
  action
) {
  switch (action.type) {
    case "SEARCH_BY_CHANGED":
      return { ...state, searchBy: action.searchBy };
    case "SEARCH_INIT":
      return { ...state, searchTerm: action.searchTerm };
    case "SORT_BY_CHANGED":
      return { ...state, sortBy: action.sortBy };
    default:
      return state;
  }
}
