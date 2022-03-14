import { action } from "@storybook/addon-actions";

import { Button, ButtonProps } from "../components/shared/Button";

export default {
  title: "Button",
  component: Button,
  argTypes: {
    text: "Button",
    onClick: { action: "clicked" },
    label: "",
    variety: {
      options: ["secondary", "primary"],
      control: { type: "select" },
    },
  },
};

const Template = ({ label }: ButtonProps) => <Button label={label} />;

export const Default = Template.bind({});

export const Primary = () => <Button onClick={action("clicked")} label="Primary" />;
export const Secondary = () => (
  <Button variety="secondary" onClick={action("clicked")} label="Secondary" />
);
