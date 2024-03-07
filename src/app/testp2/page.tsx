"use client"
import { useEffect, useRef, useState } from 'react';
import Quill from 'quill';
import 'quill/dist/quill.snow.css';


export default function testPage2() {
	const editorRef = useRef<HTMLDivElement>(null);
  const [content, setContent] = useState<string>('');
	const [editorContent, setEditorContent] = useState<string>('');


  useEffect(() => {
    if (!editorRef.current) return;

    const quill = new Quill(editorRef.current, {
      modules: {
        toolbar: [
          [{ header: [1, 2, false] }],
          ['bold', 'italic', 'underline'],
          ['image', 'code-block', 'video', 'link'],
        ],
      },
      placeholder: 'Compose an epic...',
      theme: 'snow',
    });

    quill.on('text-change', () => {
      setContent(quill.root.innerHTML);
    });

    return () => {
      quill.off('text-change');
    };
  }, []);

  const handleSubmit = () => {
    console.log('Conteúdo enviado:', content);
		setEditorContent(content)
  };

  return (
    <div>
      <div ref={editorRef} className="h-64" />
      <button onClick={handleSubmit}>
        Enviar
      </button>
			<div className='flex justify-center w-full'>
				<div className="text-center" dangerouslySetInnerHTML={{ __html: editorContent}}></div>
			</div>
    </div>
  );
};

