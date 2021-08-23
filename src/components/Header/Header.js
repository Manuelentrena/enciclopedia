import React from 'react';
import { NavBar, SearchForm } from 'components';

export default function Header() {
  return (
    <div className="header">
      <NavBar />
      <SearchForm />
    </div>
  );
}
