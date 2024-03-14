import { useMemo, useState } from 'react';
import Image from 'next/image';

export interface ImageSelectionProps {
  value?: string | null;
  onChange: (imageUrl: string | null) => void;
}

const TestImgButton = ({ value, onChange }: ImageSelectionProps) => {
  const [previewImage, setPreviewImage] = useState<File | null>(null);

  const getFileImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target?.files?.[0];
    if (file) {
      setPreviewImage(file);
      const url = URL.createObjectURL(file);
      onChange(url);
    }
  };

  return (
    <div className='h-[46%]'>
      <input id='file' className='h-full hidden' type='file' accept='image/*' onChange={getFileImage} />
      <label htmlFor='file' className='flex justify-center items-center rounded-lg w-full h-full border-2 border-[#E6E6E6] border-dashed cursor-pointer'>
        {useMemo(() => {
          if (previewImage) {
            return (
              <Image
                src={URL.createObjectURL(previewImage)}
                alt="Preview"
                width={500}
                height={500}
                className="w-full h-full rounded-lg"
              />
            );
          } else {
            return <p>Choose a poster for your News</p>;
          }
        }, [previewImage])}
      </label>
    </div>
  );
};

export default TestImgButton;
