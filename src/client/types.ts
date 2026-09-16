type UUID = ReturnType<typeof crypto.randomUUID>;
export type NyaitterID = `#${number}`;
export type Color = `#${string}`;

export interface GroupBadge {
  id: UUID;
  name: string;
  icon_data: string;
}

export interface Notice {
  id: number;
  type: "reply" | "like" | string;
  from: SimpleUser;
  target: {
    kind: "post" | string;
    id: number;
  };
  target_post: {
    id: number;
    content: string;
  };
  read: boolean;
  clicked: boolean;
  message: string | null;
  created_at: string;
}

export interface SimpleUser {
  id: number;
  nyaitter_id: NyaitterID;
  name: string;
  scid: string | null;
  icon_data: string;
  icon_available: boolean;
  admin: boolean;
  verify: boolean;
  is_imposter: boolean;
  group_badges: GroupBadge[];
}

export interface User extends SimpleUser {
  uuid: null;
  handle: NyaitterID;
  me: string;
  header_image: string | null;
  settings: {
    color_theme: "nyax" | string;
    content_editor: "textarea" | string;
    custom_colors: {
      dark_light_primary_color: Color;
      light_primary_color: Color;
      primary_color: Color;
      primary_hover_color: Color;
    };
    data_saver: boolean;
    dm_invitation: "require_approval" | string;
    emoji: "twemoji" | string;
    home_tabs: ("all" | "following" | "announce" | string)[];
    lock: boolean;
    ng_words: string[]
    post_timestamp_format: "absolute_24" | string;
    reject_unknown_login: boolean;
    show_follow: boolean;
    show_follower: boolean;
    show_like: boolean;
    show_scid: boolean;
    show_star: boolean;
    theme: "light" | string;
  }
  block: number[];
  notice: Notice[];
  notification_unread_count: number;
  dm_unread_count: number;
  freeze: string | null;
  shadow: boolean;
  lock: boolean;
  follow: number[];
  like: number[];
  star: number[]
  pin: string | null;
  created_at: string;
}
