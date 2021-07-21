import Input from "./Input";
import "../../index.css";
import * as FiIcons from "react-icons/fi";

const icons = {"No Icon" : undefined, ...FiIcons}
export default {
  title: "Form Input",
  component: Input,
  argTypes:{
    Icon:{
      options:Object.keys(icons),
      mapping: icons,
      control:{
        type : "select",
      }
    }
  }
};

export const main = (args:any) => <Input {...args} ></Input>;

main.args = {
  placeholder:"Username",
  touched: false,
  error : "",
  className:"",
  type: "text",
  id :""
}
