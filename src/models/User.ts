import { Entity } from "./Entity";

export interface User extends Entity {
  first_name?: string;
  middle_name?: string;
  last_name?: string;
  role?: "staff" | "admin";
  issues?: Issue[];
}
export interface Issue {
  id: number;
  title: string;
}
