import { css } from '@emotion/react';

const widths = {
  back: '132px',
  link: '95px',
  search: '480px',
  filter: '200px',
  countriesList: '265px',
};

const Box = ({ children, variant, customCss = {} }) => {
  return (
    <div
      css={{
        display: 'inline-block',
        padding: '.6em 0',
        width: widths[variant],
        borderRadius: '6px',
        border: '1px solid rgba(27, 31, 36, 0.15)',
        backgroundColor: 'rgba(246, 248, 250)',
        color: 'rgba(36, 41, 47)',
        boxShadow: '0 2px 5px 1px rgba(64, 60, 67, .16)',
        overflow: 'hidden',
        ...customCss,
      }}
    >
      {children}
    </div>
  );
};

export default Box;
