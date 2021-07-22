import Button from "./Button";

export default {
  title: "Button",
  component: Button,
  argTypes: {
    type: {
      control: {
        type: "select",
      },
    },
    theme: {
      control: {
        type: "select",
      },
    },
  },
};

export const main = (args: any) => <Button {...args}>{args.children}</Button>;

main.args = {
  rounded: false,
  outline: false,
  type: "button",
  theme: "primary",
  children: "Button",
};
