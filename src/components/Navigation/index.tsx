"use client";

import { Avatar } from "primereact/avatar";
import { Sidebar } from "primereact/sidebar";
import { useEffect, useState } from "react";

export default function Navigation({
  showMenu,
  setShowMenu,
  className = "",
}: any) {
  const [visible, setVisible] = useState<any>(false);
  function checkWindowWidth() {
    var windowWidth = window.innerWidth;
    if (windowWidth > 1024) {
    } else {
      setShowMenu(!showMenu);
    }
  }
  useEffect(() => {
    // Call the function initially to check the window width on page load
    checkWindowWidth();
    // Add an event listener to check the window width when the window is resized
    window.addEventListener("resize", checkWindowWidth);
  }, []);
  const colors = [
    "Red",
    "Blue",
    "Green",
    "Yellow",
    "Purple",
    "Orange",
    "Pink",
    "Brown",
    "Black",
    "White",
    "Gray",
    "Cyan",
    "Magenta",
  ];

  return (
    <div
      className={`flex items-center drop-shadow-md justify-between topbar bg-white ${className}`}
    >
      <div className="flex space-x-4 items-center p-4">
        <i
          onClick={() => setShowMenu(!showMenu)}
          className="pi pi-bars cursor-pointer"
          style={{ color: "#000", fontSize: "1.5rem" }}
        />

        <div className="font-bold text-lg ">Logo</div>
      </div>
      <div className="flex items-center">
        <p onClick={() => setVisible(true)} className="cursor-pointer mx-2">
          <i className="pi pi-bell me-1" style={{ color: "#666" }} />{" "}
          Notifications
        </p>
        <div className="flex justify-center">
          <Avatar
            image="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png"
            className="d-block mr-2"
          />
          {/* <img className="" src="" alt="profile-img" /> */}
          <div>
            <p style={{ fontSize: "15px" }}>Kafayat Ullah</p>
            <p style={{ fontSize: "13px" }}>MERN Stack Developer</p>
          </div>
        </div>
        <Sidebar
          position="right"
          visible={visible}
          onHide={() => setVisible(false)}
        >
          <h2>Notifications</h2>
          {[1, 2, 3, 4, 5, 6]?.map((task, i) => (
            <div
              key={i}
              className="rounded-md border-l-4 bg-slate-100 my-2 px-4 py-3"
              style={{ borderLeftColor: colors[i] }}
            >
              <h3 className="font-semibold">New Notification</h3>
              <p style={{ fontSize: "13px" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt.
              </p>
            </div>
          ))}
        </Sidebar>
      </div>
    </div>
  );
}
