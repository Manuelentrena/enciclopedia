import React from 'react';
import { Button, IconBack, IconShare } from 'components';
import { useHistory } from 'react-router-dom';
import { useGlobal } from 'hooks';

export default function PageBack({ title }) {
  const history = useHistory();
  const { language: fx } = useGlobal();

  const handleBack = () => {
    history.push(`/${fx}`, { trendings: true });
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
