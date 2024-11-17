export interface DataItem {
  id: string;
  name: string;
  text: string;
  date: string;
  comments: { count: string };
  likes: { count: string };
  reposts: { count: string };
  views: { count: string };
  attachments: Attachment[];
}

export interface Attachment {
  type: string;
  link?: Link;
  video?: Video;
  photo?: AttachmentPhoto;
}

export interface Link {
  url: string;
  title: string;
  caption?: string;
  description: string;
  photo?: Photo;
  is_favorite?: boolean;
  target?: string;
  button?: Button;
}

export interface Photo {
  id: number;
  album_id: number;
  owner_id: number;
  sizes: Size[];
  text: string;
  date: number;
  user_id?: number;
}

export interface Size {
  type: string;
  url: string;
  width: number;
  height: number;
}

export interface Button {
  title: string;
  action: Action;
}

export interface Action {
  type: string;
  url: string;
}

export interface Video {
  id: number;
  owner_id: number;
  title: string;
  duration: number;
  description: string;
  date: number;
  comments: number;
  views: number;
  width: number;
  height: number;
  image: Image[];
  is_favorite: boolean;
  first_frame: FirstFrame[];
  access_key: string;
  can_add: number;
  track_code: string;
  type: string;
}

export interface Image {
  height: number;
  url: string;
  width: number;
  with_padding?: number;
}

export interface FirstFrame {
  url: string;
  width: number;
  height: number;
}

export interface AttachmentPhoto {
  id: number;
  album_id: number;
  owner_id: number;
  user_id: number;
  sizes: AttachmentPhotoSize[];
  text: string;
  date: number;
  access_key: string;
  post_id?: number;
}

export interface AttachmentPhotoSize {
  type: string;
  url: string;
  width: number;
  height: number;
}