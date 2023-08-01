import React, { createContext, useState } from "react";
import "../App.css";

export default function Recommended(props) {
  return (
    <>
      <div className="flex-row rec" onClick={() => props.ambilLink(props.link)}>
        <div className="haha">
          <div className="thumbnail">
            <div className="thumbnails">
              <img className="na" src={props.foto} alt="" />
            </div>
            <div className="gift">
              <img className="vid" src={props.gift} alt="" />
            </div>
          </div>
        </div>
        <div
          className="flex-col"
          style={{ padding: "3px 62px 0px 0px", gap: 8 }}
        >
          <span className="rekom-judul">{props.judul}</span>
          <div className="flex-col" style={{ gap: 2 }}>
            <span className="rekom-channel">{props.channel}</span>
            <div className="flex-row gap-5 ai-center">
              <span className="rekom-views">{props.views}</span>
              <div className="flex-row ai-center gap-5">
                <span style={{ color: "#AAAAAA" }}>&middot;</span>
                <span className="rekom-time">{props.time}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
