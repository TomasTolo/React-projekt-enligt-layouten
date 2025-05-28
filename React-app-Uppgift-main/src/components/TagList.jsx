import React from 'react';

const TagButton = ({ text, onClick }) => {
  return (
    <button
      className="tag-button"
      onClick={onClick}
      style={{
        margin: '0.5rem',
        padding: '0.5rem 1.5rem',
        borderRadius: '16px',
        border: 'none',
        background: 'purple',
        color: 'white',
        fontWeight: 'bold',
        fontSize: '1rem',
        boxShadow: '0 4px 8px rgba(0,0,0,0.15)',
        cursor: 'pointer'
      }}
    >
      {text}
    </button>
  );
};

const TagList = () => {
  const handleTagClick = (tagText) => {
    console.log(`Clicked: ${tagText}`);
  };

  return (
    <div
      className="tag-list"
      style={{
        border: '3px solid #2a9d8f',
        borderRadius: '8px',
        padding: '1.5rem',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '0.5rem',
        background: 'white',
        minWidth: '260px',
        maxWidth: '320px'
      }}
    >
      <TagButton text="Click Tag BTN" onClick={() => handleTagClick('Tag 1')} />
      <TagButton text="Click Tag BTN" onClick={() => handleTagClick('Tag 2')} />
      <TagButton text="Click Tag BTN" onClick={() => handleTagClick('Tag 3')} />
      <TagButton text="Click Tag BTN" onClick={() => handleTagClick('Tag 4')} />
      <TagButton text="Click Tag BTN" onClick={() => handleTagClick('Tag 5')} />
      <TagButton text="Click Tag BTN" onClick={() => handleTagClick('Tag 6')} />
      <TagButton text="Click Tag BTN" onClick={() => handleTagClick('Tag 7')} />
      <TagButton text="Click Tag BTN" onClick={() => handleTagClick('Tag 8')} />
      <TagButton text="Click Tag BTN" onClick={() => handleTagClick('Tag 9')} />
    </div>
  );
};

export default TagList;