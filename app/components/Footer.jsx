
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-4 mt-8">
      <div className="container mx-auto flex justify-between items-center">
        {/* Left aligned text */}
        <div>
          <p className="text-lg font-semibold">
            ANIMARU
          </p>
          <p className="text-sm text-gray-400">
            This web does not store any files, Anime is provided by third-parties.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
