import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from './Button';

storiesOf('Button', module).add('default', () => (
  <div>
    <Button language="简体" />
    <Button language="英文" />
    <Button language="泰文" />
  </div>
));
