import React from 'react';
type ButtonProps = {
  button: string;
  style: React.CSSProperties;
  onClick?: () => void;
};

const Button = ({button, style, onClick}:ButtonProps) => {
  return (
    <button
      className={`sm:py-[6px] sm:px-[26px] py-[4px] px-[20px] font-medium border-none rounded-[5px] btn-bg text-dimBlack navbar-active `}
      style={style}
      onClick={onClick}
    >
      {button}
    </button>
  );
}

export default Button
