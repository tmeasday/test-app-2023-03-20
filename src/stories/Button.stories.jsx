import React, {useEffect} from 'react';

import { Button } from './Button';

const Wrapper = (storyFn) => {
  useEffect(() => {
    const logSize = (event) => () => {
      const logDiv = document.querySelector("#resize-log");
      logDiv.innerHTML += `${new Date()} ${event}: ${window.innerWidth} / ${window.innerHeight} <br />`;
    };
    const logOnResize = logSize('Resize')
    logSize('Start')();
    window.addEventListener("resize", logOnResize);
    return () => {
      window.removeEventListener("resize", logOnResize);
    };
  }, []);

  return (
    <div style={{ height: "100vh", padding: "10%", position: "relative" }}>
      <div id="resize-log" data-testid="resize-log"></div>
      {storyFn()}
    </div>
  );
};

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Button',
  component: Button,
  decorators: [Wrapper],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  primary: true,
  label: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
};
