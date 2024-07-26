interface Props {
  text: string;
  align?: 'left' | 'center' | 'right';
  weight?: 'normal' | 'bold' | 'semibold';
  paddingLeft?: string;
}

const TextNormal: React.FC<Props> = ({
  text,
  align = 'left',
  weight = 'normal',
  paddingLeft = '0',
}) => {
  return (
    <p
      className={`text-${align} text-pretty font-${weight} text-grayDarkest text-xs md:text-sm lg:text-base leading-relaxed`}
      style={{ paddingLeft }}
    >
      {text}
    </p>
  );
};

export default TextNormal;
