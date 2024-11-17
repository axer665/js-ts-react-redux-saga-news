import React from "react";
import logoNetology from "../assets/netology.jpg";
import { formateDate } from "../utils/dataTIme";

type Props = { date: string, url:string };

export default function PostHeader({ date, url }: Props) {
  return (
    <div className="post__header">
      <img
        src={logoNetology}
        alt=""
        style={{ width: "50px", height: "50px" }}
      />
      <div className="post__header__info">
        <a href={url}>Университет интернет профессий Нетология</a>
        <span style={{ color: "rgb(160, 152, 152)" }}>{formateDate(date)}</span>
      </div>
    </div>
  );
}
