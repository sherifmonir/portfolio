// components/CopyEmailButton.tsx
'use client';

import { useState } from 'react';
import { IoCopyOutline } from 'react-icons/io5';

const CopyEmailButton = ({ email }: { email: string }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  

  return (
    <button
      type="button"
      onClick={handleCopy}
      className="ml-3 h-full w-full flex justify-center items-center gap-1 rounded-md border border-white/20 px-3 py-1 text-xs transition hover:bg-white/10 cursor-pointer"
    >
      {copied ? 'Copied!' : 'Copy'}
       <IoCopyOutline />
    </button>
  );
};

export default CopyEmailButton;