import { State } from "./State";
import { Issue, User } from "./User";

export interface Group {
  id: number;
  name: string;
  is_private: boolean;
  description: string;
  introductory_message: null | string;
  group_image_url: null | string;
  join_code: string;
  created_at: Date;
  updated_at: Date;
  chatCount: number;
  state: State | null;
  creator: User | null;
  issues: Issue[];
  invitedMembers: User[];
  participants: User[];
  advocatePage: string | null;
}
