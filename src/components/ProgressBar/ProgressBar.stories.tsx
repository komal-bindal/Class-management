import { prototype } from "events";
import ProgressBar from "./ProgressBar";

export default {
  title: "ProgressBar",
  component: ProgressBar,
  argTypes: {
    progress: {
      control: {
        type: "range",
      },
    },
  },
};

export const main = (args: any) => <ProgressBar {...args}></ProgressBar>;

main.args = {
  progress: 50,
  theme: "primary",
};
