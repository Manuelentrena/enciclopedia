import React from 'react';
import { NavBar, SearchForm, PageBack } from 'components';

export default function Header({ isPage = false }) {
  return (
    <div className="header">
      <NavBar />
      {isPage ? <PageBack /> : <SearchForm />}
    </div>
  );
}
