import { Button, ButtonProps } from "../components/shared/Button";

export default {
  title: "Button",
  component: Button,
  argTypes: {
    variety: {
      options: ["primary", "secondary"],
      control: { type: "select" },
    },
  },
};

const Template = (args: ButtonProps) => <Button {...args} />;

export const Default = Template.bind({});
