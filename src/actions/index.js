const API_BASE_URL = 'https://hacker-news.firebaseio.com/v0';

export const FETCH_TOP_STORIES_SUCCESS = 'FETCH_TOP_STORIES_SUCCESS';
export const fetchTopStoriesSuccess = stories => ({
  type: FETCH_TOP_STORIES_SUCCESS,
  stories,
})

export const FETCH_ITEMS_ERROR = 'FETCH_ITEMS_ERROR';
export const fetchItemsError = error => ({
  type: FETCH_ITEMS_ERROR,
  error,
})

export const FETCH_ITEM_ERROR = 'FETCH_ITEM_ERROR';
export const fetchItemError = error => ({
  type: FETCH_ITEM_ERROR,
  error,
})

export const FETCH_TOP_COMMENTS_SUCCESS = 'FETCH_TOP_COMMENTS_SUCCESS';
export const fetchTopCommentsSuccess = comments => ({
  type: FETCH_TOP_COMMENTS_SUCCESS,
  comments,
})

export const FETCH_TOP_COMMENTS_LOADING = 'FETCH_TOP_COMMENTS_LOADING';
export const fetchTopCommentsLoading = comments => ({
  type: FETCH_TOP_COMMENTS_LOADING,
  comments,
})

/* START - fetch and modify stories */

export const fetchTopStoryIds = () => dispatch => {
  return fetch(`${API_BASE_URL}/topstories.json`)
    .then(res => {
      if(res) {
        return res.json();
      } else {
        dispatch(fetchItemsError(res.statusText));
      }
    })
    .then(storyIds => {
      const topTenStoryIds = storyIds.length > 10 ? storyIds.slice(0,10) : storyIds;
      dispatch(fetchTopStories(topTenStoryIds));
    })
    .catch(err => dispatch(fetchItemsError(err)));
}

export const fetchTopStories = storyIds => dispatch => {
  return Promise.all(storyIds.map(id => dispatch(fetchItem(id))))
    .then(stories => {
      const modifiedStories = modifyStories(stories);
      dispatch(fetchTopStoriesSuccess(modifiedStories));
    })
    .catch(err => dispatch(fetchItemsError(err)));
}

export const modifyStories = stories => {
  return stories.map(story => {
    const comments = story.kids ?
      story.kids.length > 20 ? story.kids.slice(0,20) : story.kids : [];
    return {
      id: story.id || '',
      title: story.title || '',
      author: story.by || '',
      time: story.time || '',
      url: story.url || '',
      comments,
    };
  })
}

/* END - fetch and modify stories */

/* START - fetch and modify comments */

export const fetchTopComments = (commentIds, storyId) => dispatch => {
  dispatch(fetchTopCommentsLoading(populateComments(commentIds)));
  return Promise.all(commentIds.map(id => {
    return fetch(`${API_BASE_URL}/item/${id}.json`)
      .then(res => {
        if(res) {
          return res.json();
        } else {
          dispatch(fetchItemError(res.statusText));
        }
      })
      .then(comment => comment)
      .catch(err => dispatch(fetchItemError(err)));
  }))
  .then(comments => {
    const modifiedComments = modifyComments(comments);
    dispatch(fetchTopCommentsSuccess(modifiedComments));
  })
  .catch(err => dispatch(fetchItemsError(err)));
}

export const populateComments = commentIds => {
  return commentIds ? commentIds.map(id => {
    return {
      id,
      text: '',
      author: '',
      time: '',
      parent: '',
      loading: true,
      loaded: false,
    };
  }) : [];
}

export const modifyComments = comments => {
    return comments ? comments.map(comment => {
      return {
        id: comment.id,
        text: comment.text || '',
        author: comment.author || '',
        time: comment.time || '',
        parent: comment.parent || '',
        loading: false,
        loaded: true,
      };
    }) : [];
}

/* END - fetch and modify comments */

export const fetchItem = id => dispatch => {
  return fetch(`${API_BASE_URL}/item/${id}.json`)
    .then(res => {
      if(res) {
        return res.json();
      } else {
        dispatch(fetchItemError(res.statusText));
      }
    })
    .then(item => item)
    .catch(err => dispatch(fetchItemError/(err)));
}
