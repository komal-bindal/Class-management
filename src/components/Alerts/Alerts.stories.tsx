import Alerts from "./Alerts";

export default {
  title: "Alerts",
  component: Alerts,
  argTypes: {
    textTheme: {
      control: {
        type: "select",
      },
    },
  },
};
export const main = (args: any) => <Alerts {...args}></Alerts>;

main.args = {
  theme: "solid",
  textTheme: "primary",
  title: "Primary!",
  children: "Lorem Ipsum is simply dummy text of the printing",
};
