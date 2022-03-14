import { Story, Meta } from "@storybook/react";
import { Button, ButtonProps } from "../components/shared/Button";

export default {
  title: "Button",
  label: { defaultValue: "Button" },
  component: Button,
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: "Primary",
  variety: "primary",
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: "Secondary",
  variety: "secondary",
};
