import React from 'react';

interface Props {
  text: string;
  align?: 'left' | 'center' | 'right';
  padding?: number;
  paddingBottom?: number;
  paddingTop?: number;
  weight?: 'normal' | 'bold' | 'semibold';
  color?: string;
}

const H4: React.FC<Props> = ({
  text,
  align = 'left',
  padding = 0,
  paddingBottom = 0,
  paddingTop = 0,
  weight = 'semibold',
  color = 'black',
}) => {
  const maxWidth = `calc(100% - ${2 * padding}px)`;

  return (
    <div>
      <h4
        className={`text-xs sm:text-base text-${color} text-wrap font-${weight} text-${align} overflow-hidden whitespace-nowrap`}
        style={{ maxWidth, paddingBottom, paddingTop }}
      >
        {text}
      </h4>
    </div>
  );
};

export default H4;
