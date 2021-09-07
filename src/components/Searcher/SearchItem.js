import React from 'react';
import parse from 'html-react-parser';
import { SearchItemImg } from 'components';
import { useHistory } from 'react-router';
import { useGlobal } from 'hooks';

const SearchItem = ({
  description, title, id, selected,
}) => {
  const history = useHistory();
  const { language: fx } = useGlobal();

  const handleClick = ({ e, title: pathTitle }) => {
    const options = { page: true };
    history.push(`/${fx}/page/${pathTitle}`, options);
    e.stopPropagation();
  };

  return (
    <div
      id={id}
      className={selected === id ? 'oneResult selected' : 'oneResult'}
      onClick={(e) => handleClick({ e, title })}
    >
      <div className="oneResult__img">
        <SearchItemImg title={title} id={id} />
      </div>
      <div className="oneResult__body">
        <h3 className="oneResult__title">{title}</h3>
        <p className="oneResult__description">{parse(description)}</p>
      </div>
    </div>
  );
};

export default React.memo(SearchItem);
