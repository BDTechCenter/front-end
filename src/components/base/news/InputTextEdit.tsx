import React, { useEffect, useRef, useState } from 'react';
import Quill from 'quill';
import 'quill/dist/quill.snow.css';
export default function InputTextEdit() {
  const editorRef = useRef<HTMLDivElement>(null);
  const [content, setContent] = useState<string>('');

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

    return () => {
      quill.off('text-change');
    };
  }, []);

  const editorStyle = {
    flex: '1',
    paddingLeft: '1.75rem',
    marginBottom: '1.25rem',
    marginTop: '0.50rem',
    fontSize: '1rem',
    width: '100%',
    borderRadius: 'calc(var(--radius) - 2px)',
    border: '1px solid #E4E4E7',
    backgroundColor: 'transparent',
    borderInput: 'hsl(var(--input))',
    padding: '0.75rem',
    boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    height: '30rem',
  };

  return (
    <div className='flex w-full justify-center items-center'>
      <div className='w-[45rem]'>
        <div ref={editorRef} style={editorStyle} />
      </div>
    </div>
  );
}
