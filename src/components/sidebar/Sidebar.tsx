import React, { useEffect, useState } from "react";
import "./Sidebar.scss";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddIcon from "@mui/icons-material/Add";
import SidebarChannel from "./SidebarChannel";
import MicIcon from "@mui/icons-material/Mic";
import HeadphonesIcon from "@mui/icons-material/Headphones";
import SettingsIcon from "@mui/icons-material/Settings";
import { auth, db } from "../../firebase";
import { useAppSelector } from "../../app/hooks";
import useCollection from "../../hooks/useCollection";
import { collection, addDoc } from "firebase/firestore";

const Sidebar = () => {
  const user = useAppSelector((state) => state.user.user);
  const { documents: channels } = useCollection("channels");

  const addChannel = async () => {
    let channelName = prompt("新しいチャンネルを作成します");

    if (channelName) {
      await addDoc(collection(db, "channels"), {
        channelName: channelName,
      });
    }
  };
  return (
    <div className="sidebar">
      {/* sidebarLeft */}
      <div className="sidebar__left">
        <div className="serverIcon">
          <span className="serverIcon__span">
            <img
              className="serverIcon__img"
              src="./discordIcon.png"
              alt="React"
            />
          </span>
        </div>
        <div className="serverIcon">
          <span className="serverIcon__span">
            <img
              className="serverIcon__img"
              src="./discordIcon.png"
              alt="React"
            />
          </span>
        </div>
      </div>
      {/* sidebarRight */}
      <div className="sidebar__right">
        <div className="sidebar__top">
          <h3>Discord</h3>
          <ExpandMoreIcon />
        </div>

        <div className="sidebar__channels">
          <div className="channels">
            <div className="channels__header">
              <ExpandMoreIcon />
              <h4>メインチャット</h4>
            </div>
            <AddIcon
              className="channels__addicon"
              onClick={() => addChannel()}
            />
          </div>

          <div className="list">
            {channels.map((channel) => (
              <SidebarChannel
                channel={channel}
                id={channel.id}
                key={channel.id}
              />
            ))}
          </div>

          <div className="footer">
            <div className="footer__account">
              <img
                src={user?.photo}
                alt=""
                className="footer__img"
                onClick={() => auth.signOut()}
              />
              <div className="accountName">
                <h4>{user?.displayName}</h4>
                <span>#{user?.uid.substring(0, 4)}</span>
              </div>
            </div>

            <div className="footer__voice">
              <MicIcon />
              <HeadphonesIcon />
              <SettingsIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
