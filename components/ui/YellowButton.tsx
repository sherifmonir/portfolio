import React from 'react'
   import { FaGithub } from "react-icons/fa6";
const YellowButton = () => {
  return (


<a
  href="https://github.com/sherifmonir/Lumio"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center gap-1 rounded-lg bg-yellow-300 px-3 py-1 text-black"
>
  Code
  <FaGithub />
</a>
  )
}

export default YellowButton
//<div className="absolute  bg-yellow-300 h-full w-full -z-10 group-hover:bottom-0 group-hover:right-0 transition-all duration-200" />