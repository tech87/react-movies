import React from 'react';

export default function Trailer({ embedId }) {
  return (
    <div>
      <iframe
        width="100%"
        height="600px"
        src={`https://www.youtube.com/embed/${embedId}`}
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gryroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
}
