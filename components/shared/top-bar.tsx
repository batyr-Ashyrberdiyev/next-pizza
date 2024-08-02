import { FC } from 'react';
import { Container } from './container';
import { Categories } from './categories';
import { SortPopup } from './sort-popup';

export const TopBar: FC = () => {
  return (
    <div className="sticky top-0 bg-white py-5 shadow-lg shadow-black/5 z-10">
      <Container className="flex justify-between items-center">
        <Categories />
        <SortPopup />
      </Container>
    </div>
  );
};
