import React, { useEffect, useRef, useState } from 'react';
import Quill from 'quill';
import 'quill/dist/quill.snow.css';

export interface InputTextEditProps{
  onChange: (htmlValue: string) => void;
}

export default function InputTextEdit({ onChange}: InputTextEditProps) {
  const editorRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!editorRef.current) return;

    const quill = new Quill(editorRef.current, {
      modules: {
        toolbar: [
          ['bold', 'italic', 'underline', 'code-block', 'link'],
          ['image', 'video'],
        ],
      },
      theme: 'snow',
    });

    quill.on('text-change', () => {
      const newText = quill.root.innerHTML;
      onChange(newText)
    });

    return () => {
      quill.off('text-change');
    };
  }, []);

  const editorStyle = {
    paddingLeft: '1.75rem',
    marginBottom: '1.25rem',
    marginTop: '0.50rem',
    fontSize: '1rem',
    width: '100%',
    borderRadius: 'calc(var(--radius) - 4px)',
    border: '1px solid #E4E4E7',
    backgroundColor: 'transparent',
    borderInput: 'hsl(var(--input))',
    padding: '0.5rem',
    boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    overflow: 'hidden',
    height: '18rem',
  };

  return (
    <div className='flex w-full justify-center items-center'>
      <div className='w-full max-w-[100%]'>
        <div ref={editorRef} style={editorStyle} />
      </div>
    </div>
  );
}
