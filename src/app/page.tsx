'use client';

import React, { useState } from 'react';
import { marked } from 'marked';

export default function MarkdownPreviewer() {
  const [markdown, setMarkdown] = useState<string>(`# BitForge95 Mardown Previewer`);
  
  marked.setOptions({
    breaks: true, 
    gfm: true,    
  });

  return (
    <main className='container'
    >
      <h1 className='main-Header'>
        Markdown Previewer
      </h1>

      <textarea
        className='preview-container'
        value={markdown}
        onChange={(e) => setMarkdown(e.target.value)}
      />

      <h2 style={{ borderBottom: '2px solid #0070f3', paddingBottom: 6, marginBottom: 12 }}>
        Preview
      </h2>

      <div
        className='markdown-container'
        dangerouslySetInnerHTML={{ __html: marked.parse(markdown) }}
      />
    </main>
  );
}
