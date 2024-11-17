import React from "react";
import PostHeader from "./PostHeader";
import PostFooter from "./PostFooter";
import { DataItem } from "../models/models";
import {getUrl} from "../utils/getUrl.ts";
import {getNewsUrl} from "../utils/getNewsUrl.ts";

type Props = { post: DataItem };

export default function Post({ post }: Props) {
    console.log(post);
  const texts = post.text.split("&");
  const text = texts[0];

  return (
    <div className="post">
      <PostHeader date={post.date} url={getNewsUrl(post)} />
      <div className="post__info">
        <span>{text}</span>
          <a href={getNewsUrl(post)}>
            <img src={getUrl(post) || "https://via.placeholder.com/320x320"}
                 alt="image"
                 width="320"/>
          </a>
      </div>
      <PostFooter
        comment={post.comments.count}
        like={post.likes.count}
        repost={post.reposts.count}
        view={post.views.count}
      />
    </div>
  );
}
