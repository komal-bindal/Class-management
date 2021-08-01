import { createContext } from "react";
import { User } from "./models/User";

interface data {
  user?: User;
  setUser: (u: User) => void;
}

export const AppContext = createContext<data>({
  user: undefined,
  setUser: function (u: User) {
    this.user = u;
  },
});
