interface Props {
  title: string;
  pb?: number | string;
}

const H1: React.FC<Props> = ({ title, pb = '1.5rem' }) => {
  return (
    <h1
      className={`text-3xl md:text-4xl font-bold text-center text-yellowStrong`}
      style={{ paddingBottom: pb }}
    >
      {title}
    </h1>
  );
};

export default H1;
