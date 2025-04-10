"use client";
import { useState } from "react";
import styles from "./RightBar.module.css";
import NavButton from "../NavButton/NavButton";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import Image from "next/image";

function RightBar() {
  const [showVideo, setShowVideo] = useState(false);
  return (
    <div className={styles.container}>
      <div className={styles.navBar}>
        <NavButton src="/bot.webp" alt="Chatbot" href="/ask" />
        <Image className={styles.videoButton} alt="question-mark" src="/question.svg" width={100} height={100} onClick={()=>setShowVideo(true)}></Image>
        <NavButton src="/logo.webp" alt="MyBK" href="https://mybk.hcmut.edu.vn/" target="_blank" />
      </div>
      <div className={styles.themeToggle}>
        <ThemeToggle />
      </div>

      {/* Full-Screen Video Player Modal */}
      {showVideo && (
        <div className={styles.videoOverlay} onClick={() => setShowVideo(false)}>
          <div className={styles.videoContainer} onClick={(e) => e.stopPropagation()}>
            <button className={styles.closeButton} onClick={() => setShowVideo(false)}>✖</button>
            <iframe
              src="https://www.youtube.com/embed/ZS1VPHduwN0"
              title="YouTube video"
              style={{ border: "none" }}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
}

export
 default RightBar;