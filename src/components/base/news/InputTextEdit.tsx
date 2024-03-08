import { useEffect, useRef, useState } from 'react';
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
          [{ header: [false] }],
          ['bold', 'italic', 'underline'],
          ['image', 'code-block', 'video', 'link'],
        ],
        
      },
      placeholder: 'bory news',
      theme: 'snow',
    });

    quill.on('text-change', () => {
      setContent(quill.root.innerHTML);
    });

    return () => {
      quill.off('text-change');
    };
  }, []);


  return (
    <div className='flex w-full justify-center items-center'>
      <div className='w-[45rem]'>
        <div ref={editorRef} className="rounded-lg" />
      </div>
    </div>
  )
}
