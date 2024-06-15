import './Card.css';
import React from 'react';
const Card = ({ title, description, ImageComponent ,tags}) => {
    return (
      <div className="max-w-lg rounded overflow-hidden border-2 border-gray-400 m-1 flex flex-wrap">
         {ImageComponent && <ImageComponent />}
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{title}</div>
          <p className="text-gray-700 text-base">
            {description}
          </p>
        </div>
        <div className="px-6 pt-4 pb-2 ma">
        {tags && tags.length > 0 && (
        <div className="px-6 pt-4 pb-2 flex flex-wrap" >
          {tags.map((tag, index) => (
            <span key={index} className="tag inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:bg-gray-400">
              {tag}
            </span>
          ))}
        </div>
      )}
        </div>
      </div>
    );
  }
  
  export default Card;