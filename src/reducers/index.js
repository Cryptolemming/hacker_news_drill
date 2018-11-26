import * as ACTIONS from '../actions';

const initialState = {
  stories: {},
  comments: {},
  error: null
};

export default (state = initialState, action) => {
  switch(action.type) {
    case ACTIONS.FETCH_TOP_STORIES_SUCCESS:
      const updatedStoriesOnTopStoriesSuccess = state.stories;
      action.stories.forEach(story => {
        updatedStoriesOnTopStoriesSuccess[story.id] = story;
      });
      return Object.assign({}, state, { stories: updatedStoriesOnTopStoriesSuccess});
    case ACTIONS.FETCH_TOP_COMMENTS_LOADING:
      const updatedCommentsOnTopCommentsLoading = state.comments;
      action.comments.forEach(comment => {
        updatedCommentsOnTopCommentsLoading[comment.id] = comment;
      });
      return Object.assign({}, state, { comments: updatedCommentsOnTopCommentsLoading });
    case ACTIONS.FETCH_TOP_COMMENTS_SUCCESS:
      const updatedCommentsOnTopCommentsSuccess = state.comments;
      action.comments.forEach(comment => {
        updatedCommentsOnTopCommentsSuccess[comment.id] = comment;
      });
      return Object.assign({}, state, { comments: updatedCommentsOnTopCommentsSuccess });
    default:
      return state;
  }
}
