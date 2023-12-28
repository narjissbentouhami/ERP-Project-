import React from 'react';

interface AuthTitleProps {
  content?: (string | React.ReactNode)[];
  paragraphe?: string;
}

const AuthTitle: React.FC<AuthTitleProps> = ({ content, paragraphe }) => {
  return (
    <>
      <h1 className='auth-title'>
        {content &&
          content.map((item, index) => (
            <React.Fragment key={index}>{item}</React.Fragment>
          ))}
      </h1>
      <p className='text-xs text-gray-400'>{paragraphe}</p>
    </>
  );
};

export default AuthTitle;
