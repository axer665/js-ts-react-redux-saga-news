import React from "react";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../models/hook";
import { getPosts } from "../redux/DataSlice";
import Post from "./Post";
import LoadMore from "./LoadMore";

import Loading from "./Loading";

export default function News() {
  const dispatch = useAppDispatch();
  const posts = useAppSelector((state) => state.data.posts);
  const isLoading = useAppSelector((state) => state.data.loading);
  const end = useAppSelector((state) => state.data.end);

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <div className="post__wrapper">
      {posts.map((post) => (
        <Post post={post} key={post.id} />
      ))}
      {isLoading && <Loading />}
      {!isLoading && !end && <LoadMore />}
    </div>
  );
}
