import React from 'react';
import { Button, IconBack, IconShare } from 'components';
import { useGlobal } from 'hooks';
import { useHistory } from 'react-router-dom';

export default function PageBack() {
  const { language: fx } = useGlobal();
  const history = useHistory();
  const handleBack = () => {
    history.push(`/${fx}`);
  };

  return (
    <div className="pageBack">
      <div className="pageback__block1">
        <Button type="button" className="buttonBack" text={<IconBack />} action={handleBack} />
        <h1 className="pageBack__name">Titulo de la Página</h1>
      </div>
      <div className="pageback__block2">
        <div className="pageBack__separator" />
        <Button type="button" className="buttonShare" text={<IconShare />} action={null} />
      </div>
    </div>
  );
}
