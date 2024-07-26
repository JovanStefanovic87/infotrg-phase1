import Link from 'next/link';
import { ReactNode } from 'react';
import { BasicInformation } from './types';

interface Props {
  contentData: BasicInformation[];
  columns?: number;
  useLink?: boolean;
  children: (block: BasicInformation) => ReactNode;
  path?: string;
}

const renderGridSystem = ({ contentData, columns = 1, useLink = true, children, path }: Props) => {
  const rows: JSX.Element[] = [];
  const totalBlocks = contentData.length;
  const maxColumns = Math.min(columns, 3);

  let rowIndex = 0;

  while (rowIndex < totalBlocks) {
    const rowItems = contentData.slice(rowIndex, rowIndex + maxColumns);

    let colWidth;
    if (rowItems.length === 1) {
      colWidth = `100%`;
    } else if (rowItems.length === 2) {
      colWidth = `50%`;
    } else {
      colWidth = `calc(${100 / maxColumns}%)`;
    }

    rows.push(
      <div
        key={rowIndex}
        className='grid items-stretch content-stretch justify-stretch'
        style={{ gridTemplateColumns: `repeat(${rowItems.length}, ${colWidth})` }}
      >
        {rowItems.map((block) =>
          useLink ? (
            <Link key={block.id} href={`${path}${block.id}`} style={{ gridColumn: `span 1` }}>
              {children(block)}
            </Link>
          ) : (
            <div key={block.id} style={{ gridColumn: `span 1` }}>
              {children(block)}
            </div>
          ),
        )}
      </div>,
    );

    rowIndex += maxColumns;
  }

  return rows;
};

export default renderGridSystem;
