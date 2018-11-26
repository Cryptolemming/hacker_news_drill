## Hacker News Drill

### `Introduction`
---
Hacker News Drill - fetch the top 10 stories and top 20 comments for each from Hacker News.

### `Install`
---
1. clone this repo
2. Run ```npm install```
3. Run ```npm start```

### `Tech`
---
Setup: [Create-React-App](https://facebook.github.io/create-react-app/)

UI: React, Redux

API: [(HackerNews) API](https://github.com/HackerNews/API)

Testing: Jest, Enzyme

### ``Functionality``
---

StoriesContainer component fetches top 10 stories and passes story data to the Story component.  Clicking the Story component toggles expansion - on expansion the Story component will render the CommentsContainer component.  The StoriesContainer will render once.  The CommentsContainer component will fetch the respective comments for the story on initial render and will render loading text while awaiting a response.  

State is normalized without nesting as per - https://redux.js.org/recipes/structuringreducers/normalizingstateshape

### ``Testing``
---
Included Unit tests for components in shallow for - in both Connected and Unconnected states.  Child rendering is also tested.  
