/* eslint-disable */
import { configure } from '@storybook/react';

const components = require.context('../../src/resources/components', true, /\.stories\.js$/);

function loadStories() {
  components.keys().forEach(filename => components(filename));
}

configure(loadStories, module);
