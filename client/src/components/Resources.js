import React from 'react';
import { FaBook } from 'react-icons/fa';

function Resources() {
  return (
    <div className="mt-10">
      <h2 className="text-xl font-semibold mb-3 flex items-center text-blue-600 dark:text-blue-300">
        <FaBook className="mr-2" /> Mental Health Resources
      </h2>
      <ul className="list-disc pl-5 space-y-2 text-blue-700 dark:text-blue-300">
        <li>
          <a href="https://www.mentalhealthamerica.net/" target="_blank" rel="noopener noreferrer" className="hover:underline">
            Mental Health America
          </a>
        </li>
        <li>
          <a href="https://www.nami.org/help" target="_blank" rel="noopener noreferrer" className="hover:underline">
            NAMI Helpline
          </a>
        </li>
        <li>
          <a href="https://988lifeline.org/" target="_blank" rel="noopener noreferrer" className="hover:underline">
            Suicide Prevention Hotline (Call 988)
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Resources;
