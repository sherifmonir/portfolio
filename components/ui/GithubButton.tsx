import React from 'react';
import { FaGithub } from 'react-icons/fa6';

type GithubButtonProps = {
  code: string;
};

const GithubButton = ({ code }: GithubButtonProps) => {
  return (
    <a
      href={code}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex h-6 w-17 items-center gap-1 rounded-lg bg-[#F14E32] px-2 py-1 text-black cursor-pointer"
    >
      <p className="text-sm">Code</p>
      <div>
        <FaGithub />
      </div>
    </a>
  );
};

export default GithubButton;
