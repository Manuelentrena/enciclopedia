import React from 'react';
import { Button, IconBack, IconShare } from 'components';
import { useHistory } from 'react-router-dom';

export default function PageBack({ title }) {
  const history = useHistory();

  const handleBack = () => {
    history.goBack();
  };

  return (
    <div className="pageBack">
      <div className="pageback__block1">
        <Button type="button" className="buttonBack" text={<IconBack />} action={handleBack} />
        <h1 className="pageBack__name">{title}</h1>
      </div>
      <div className="pageback__block2">
        <div className="pageBack__separator" />
        <Button type="button" className="buttonShare" text={<IconShare />} action={null} />
      </div>
    </div>
  );
}
