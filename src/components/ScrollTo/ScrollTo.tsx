import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const ScrollTo: React.FC<{ itemName: string; children: React.ReactNode }> = ({
  itemName,
  children,
}) => {
  const [anchorTarget, setAnchorTarget] = useState<HTMLElement>(null);

  const handleClick: React.MouseEventHandler<HTMLAnchorElement> = event => {
    event.preventDefault();
    anchorTarget.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  useEffect(() => {
    setAnchorTarget(document.getElementById(itemName));
  }, [itemName]);

  return (
    <Link href={`#${itemName}`} onClick={handleClick}>
      {children}
    </Link>
  );
};

export default ScrollTo;
