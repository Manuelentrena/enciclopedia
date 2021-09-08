import React from 'react';
import { NavBar, SearchForm, PageBack } from 'components';

export default function Header({ isPage = false, title = 'Title of page' }) {
  return (
    <div className="header">
      <NavBar />
      {isPage ? <PageBack title={title} /> : <SearchForm />}
    </div>
  );
}
