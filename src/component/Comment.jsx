import React from "react";
import { HiOutlineThumbUp, HiOutlineThumbDown } from "react-icons/hi";
import "../App.css";

export default function Comment(props) {
  return (
    <>
      <div className="flex-row gap-20" style={{ padding: "2px 0px" }}>
        <img
          width={40}
          height={40}
          style={{
            borderRadius: "100%",
          }}
          src={props.profil}
          alt=""
        />
        <div className="flex-col komen jc-center gap-15">
          <div className="flex-col jc-center gap-10">
            <div className="flex-row gap-5 ai-end">
              <span style={{ fontSize: 14 }}>{props.nama}</span>
              <span style={{ color: "#AAAAAA", fontSize: 12 }}>
                {props.time}
              </span>
            </div>
            <span style={{ fontSize: 14 }}>{props.komen}</span>
          </div>
          <div className="flex-row gap-20 ai-center">
            <div className="flex-row gap-10">
              <div className="flex-row ai-center gap-5">
                <HiOutlineThumbUp size={22} />
                <span style={{ fontSize: 13, color: "#9B9B9B" }}>
                  {props.like}
                </span>
              </div>
              <div className="flex-row">
                <HiOutlineThumbDown size={22} />
              </div>
            </div>
            <button
              style={{
                border: "none",
                background: "none",
                fontSize: 12,
              }}
            >
              Balas
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
