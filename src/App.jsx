import { createContext, useEffect, useState } from "react";
import {
  HiOutlineMenu,
  HiOutlineSearch,
  HiMicrophone,
  HiOutlineUpload,
  HiOutlineBell,
  HiOutlineThumbUp,
  HiOutlineThumbDown,
  HiDotsHorizontal,
} from "react-icons/hi";
import { RiShareForwardLine } from "react-icons/ri";
import "./App.css";
import Comment from "./component/Comment";
import Recommended from "./component/Recommended";
import { comments, recom } from "./Isi.js";

function App() {
  const [videoUrl, setVideo] = useState(recom[0].link);

  const [inputKomen, setInputKomen] = useState("");

  useEffect(() => {
    console.log(videoUrl);
  }, [videoUrl]);

  const ambilLink = (link) => {
    setVideo(link);
  };

  return (
    <>
      <header>
        <div className="flex-row head">
          <nav className="navbar flex-row">
            <div className="jc-center ai-center">
              <HiOutlineMenu size={25} className="menu" />
              <img src="/yt.svg" className="logo" alt="" />
            </div>
            <div className="jc-center ai-center gap-5">
              <div className="jc-center ai-center">
                <div className="cari ai-center">
                  <input
                    type="text"
                    placeholder="Telusuri"
                    className="search"
                  />
                </div>
                <button className="buttonSearch jc-center ai-center">
                  <HiOutlineSearch size={23} style={{ background: "none" }} />
                </button>
              </div>
              <button
                style={{ background: "none", border: "none" }}
                className="jc-center ai-center"
              >
                <HiMicrophone size={20} className="mic" />
              </button>
            </div>
            <div className="jc-center ai-center gap-20">
              <div className="jc-center ai-center gap-5">
                <HiOutlineUpload className="upload" size={23} />
                <HiOutlineBell className="bell" size={23} />
              </div>
              <img
                height="32"
                width="32"
                className="profile"
                src="https://yt3.ggpht.com/yti/AHyvSCBpPlcmILgLT_0HzSsqlWEmGD2wj7GOp1a1e-SW-g=s88-c-k-c0x00ffffff-no-rj-mo"
                alt=""
              />
            </div>
          </nav>
        </div>
      </header>
      <section>
        <div className="container flex-row gap-5">
          <div className="container1 flex-col gap-20">
            <div className="flex-col">
              <div className="background-gradient"></div>
              <div className="iframe" style={{ position: "relative" }}>
                <iframe
                  style={{ border: "none" }}
                  className="video"
                  src={videoUrl}
                  alt="hiii"
                ></iframe>
              </div>
              <div className="flex-col gap-15">
                <div className="flex-col">
                  <div>
                    <h1 className="judul">Kompilasi Tekotok #17</h1>
                  </div>
                  <div className="flex-row ytbr">
                    <div className="flex-row">
                      <img
                        className="youtuber"
                        src="https://yt3.ggpht.com/ytc/AGIKgqN62JdqlG5hssFy97Be2HefxD_VSV_v4xEOpoSb6Q=s48-c-k-c0x00ffffff-no-rj"
                        alt="Youtuber"
                      />
                      <div className="flex-row gap-25">
                        <div className="flex-col gap-5 jc-end">
                          <div>
                            <label className="nama">Tekotok</label>
                          </div>
                          <label style={{ fontSize: 12, color: "#7E7F7E" }}>
                            3,47 jt susbcriber
                          </label>
                        </div>
                        <div className="flex-row jc-end ai-end">
                          <button className="subscribe ai-center">
                            Subscribe
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="flex-row">
                      <div className="rate flex-row jc-end ai-end">
                        <div
                          className="flex-row jc-end ai-end"
                          style={{ gap: 8 }}
                        >
                          <div className="jc-center ai-center">
                            <div className="like jc-end ai-center">
                              <button
                                className="jc-center thumb-up ai-center gap-5"
                                style={{
                                  background: "none",
                                  border: "none",
                                  marginRight: 9,
                                }}
                              >
                                <HiOutlineThumbUp
                                  size={23}
                                  style={{ background: "none" }}
                                  strokeWidth={1.1}
                                />
                                <span
                                  style={{ background: "none", fontSize: 15 }}
                                >
                                  38 rb
                                </span>
                              </button>
                              <div
                                className=""
                                style={{
                                  borderRight: "#5C5D5C 1px solid",
                                  width: "1px",
                                  height: "80%",
                                }}
                              ></div>
                            </div>
                            <div className="dislike jc-end ai-center">
                              <button
                                className="jc-center thumb-down ai-center"
                                style={{
                                  background: "none",
                                  border: "none",
                                  marginLeft: 3,
                                  marginRight: 12,
                                }}
                              >
                                <HiOutlineThumbDown
                                  size={23}
                                  style={{ background: "none" }}
                                  strokeWidth={1.1}
                                />
                              </button>
                            </div>
                          </div>
                          <div className="share jc-end ai-center">
                            <button
                              className="jc-center ai-center uye"
                              style={{
                                background: "none",
                                border: "none",
                              }}
                            >
                              <RiShareForwardLine
                                size={23}
                                style={{ background: "none", marginRight: 7 }}
                                strokeWidth={0.001}
                              />
                              <span className="bagikan">Bagikan</span>
                            </button>
                          </div>
                          <div className="dot jc-end ai-center">
                            <button
                              className="jc-center dodot ai-center"
                              style={{
                                background: "none",
                                border: "none",
                                cursor: "pointer",
                              }}
                            >
                              <HiDotsHorizontal
                                size={18}
                                style={{ background: "none" }}
                              />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="container-desc">
                  <div className="desc flex-col">
                    <div className="views flex-col gap-5" style={{ zIndex: 0 }}>
                      <div className="flex-row gap-10">
                        <span>2,1 jt x ditonton</span>
                        <span> 1 tahun yang lalu</span>
                        <span style={{ color: "#AAAAAA", fontWeight: "bold" }}>
                          #tekotok
                        </span>
                      </div>
                      <div className="hastag">
                        <a
                          href="#"
                          style={{
                            color: "#3ea6ff",
                            textDecoration: "none",
                            fontWeight: "normal",
                            width: "100%",
                          }}
                        >
                          #tekotok
                        </a>
                      </div>
                    </div>
                    <div className="flex-col">
                      <p className="deskripsi">
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Animi hic nam vel vero ducimus alias iste est
                        minima tenetur officia excepturi impedit, voluptate quia
                        dolores voluptatibus tempore natus illo voluptatum.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-col">
              <div className="container-comment">
                <div className="flex-col gap-30">
                  <div className="flex-col gap-25">
                    <div className="flex-row ai-end gap-25">
                      <span>649 Komentar</span>
                      <div className="flex-row tombol ai-center jc-center gap-5">
                        {/* <BiMenuAltLeft strokeWidth={"0.001px"} size={28} /> */}
                        <div
                          style={{
                            width: "26px",
                            height: "26px",
                            color: "white",
                          }}
                        >
                          <svg
                            viewBox="0 0 24 24"
                            preserveAspectRatio="xMidYMid meet"
                            focusable="false"
                            style={{
                              pointerEvents: "none",
                              display: "block",
                              width: "100%",
                              height: "100%",
                              fill: "white",
                            }}
                          >
                            <g>
                              <path d="M21,6H3V5h18V6z M15,11H3v1h12V11z M9,17H3v1h6V17z"></path>
                            </g>
                          </svg>
                        </div>
                        <span style={{ fontSize: 15 }}>Urutkan</span>
                      </div>
                    </div>
                    <div
                      className="flex-row jc-start ai-start"
                      style={{ gap: 18 }}
                    >
                      <img
                        width={40}
                        height={40}
                        style={{
                          borderRadius: "100%",
                        }}
                        src="https://yt3.ggpht.com/yti/AHyvSCBpPlcmILgLT_0HzSsqlWEmGD2wj7GOp1a1e-SW-g=s88-c-k-c0x00ffffff-no-rj-mo"
                        alt=""
                      />
                      <div
                        className="flex-col komen jc-center"
                        style={{ gap: 8 }}
                      >
                        <input
                          style={{ fontSize: 15, height: "25px" }}
                          type="text"
                          className="komentar"
                          placeholder="Tambahkan komentar..."
                          onChange={(e) => setInputKomen(e.target.value)}
                        />
                        <div className="oye">
                          <div
                            className="flex-row"
                            style={{ justifyContent: "space-between" }}
                          >
                            <button
                              className="jc-center ai-center"
                              style={{
                                marginLeft: "-7px",
                                backgroundColor: "#272727",
                                border: "none",
                                borderRadius: "100%",
                                width: "36px",
                                height: "35px",
                                cursor: "pointer",
                              }}
                            >
                              <svg
                                viewBox="0 0 24 24"
                                preserveAspectRatio="xMidYMid meet"
                                focusable="false"
                                className="style-scope jc-center ai-center yt-icon"
                                style={{
                                  width: "100%",
                                  height: "100%",
                                }}
                                fill="#fff"
                              >
                                <g className="style-scope yt-icon">
                                  <path
                                    d="M12,2C6.48,2,2,6.48,2,12c0,5.52,4.48,10,10,10s10-4.48,10-10C22,6.48,17.52,2,12,2z M12,21c-4.96,0-9-4.04-9-9 c0-4.96,4.04-9,9-9s9,4.04,9,9C21,16.96,16.96,21,12,21z M17,13c0,1-1,4-5,4s-5-3-5-4C8,13,16,13,17,13z M6.05,10 C6.28,8.86,7.29,8,8.5,8s2.22,0.86,2.45,2H9.91C9.7,9.42,9.15,9,8.5,9s-1.2,0.42-1.41,1H6.05z M13.05,10c0.23-1.14,1.24-2,2.45-2 s2.22,0.86,2.45,2h-1.04c-0.21-0.58-0.76-1-1.41-1s-1.2,0.42-1.41,1H13.05z"
                                    className="style-scope yt-icon"
                                  ></path>
                                </g>
                              </svg>
                            </button>
                            <div className="flex-row gap-10">
                              <button className="jc-center ai-center batal-komen">
                                Batal
                              </button>
                              <button
                                style={{
                                  backgroundColor:
                                    inputKomen === "" ? "#272727" : "#3EA6FF",
                                  color:
                                    inputKomen === "" ? "#717171" : "black",
                                  borderRadius: 50,
                                  padding: "10px 15px",
                                  border: "none",
                                  fontSize: 14,
                                }}
                              >
                                Komentar
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex-col gap-10">
                    {comments.map((komenItem) => (
                      <Comment
                        profil={komenItem.profil}
                        nama={komenItem.nama}
                        time={komenItem.time}
                        komen={komenItem.komen}
                        like={komenItem.like}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container2">
            <div className="flex-col gap-15">
              <div className="container-scroll">
                <div className="flex-row scroll">
                  <button className="active">Semua</button>
                  <button>Dari penelusuran Anda</button>
                  <button>Dari Tekotok</button>
                  <button>Terkait</button>
                </div>
                <div className="gradient"></div>
              </div>
              <div className="flex-col rekom gap-10">
                {recom.map((recommended) => (
                  <Recommended
                    foto={recommended.foto}
                    gift={recommended.gift}
                    judul={recommended.judul}
                    channel={recommended.channel}
                    views={recommended.views}
                    time={recommended.time}
                    link={recommended.link}
                    ambilLink={ambilLink}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
