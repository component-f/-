import React from 'react'
const Footer: React.FC = () => {
  return (
    <footer className=" py-4 mt-6 text-center w-full">
      <p className="text-xs text-gray200">
        Built by component-factory. The source code is available on{' '}
        <a
          href="https://github.com/component-f/component-factory"
          className="text-gray200 hover:underline cursor-pointer"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        .
      </p>
    </footer>
  )
}

export default Footer
