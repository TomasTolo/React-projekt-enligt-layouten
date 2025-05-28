import React from 'react';
import PostList from './PostList';
import TagList from './TagList';

function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start' }}>
      {/* Post list on the left */}
      <PostList />
      {/* Tag list on the right, add margin for spacing */}
      <div style={{ marginLeft: '32px' }}>
        <TagList />
      </div>
    </div>
  );
}

export default App;