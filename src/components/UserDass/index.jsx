import React from "react";
import styles from "./index.module.css";
import profile from "../../assets/men.jpg";
import myProfile from "../../assets/user-dass/userdass.svg";
import setting from "../../assets/user-dass/setting.svg";
import logout from "../../assets/user-dass/logout.svg";
import { useNavigate } from "react-router-dom";

const userDass = [
  {
    id: 2,
    icon: myProfile,
    title: "tittle",
    name: "My Profile",
  },
  {
    id: 2,
    icon: setting,
    title: "title",
    name: "Setting",
  },
  {
    id: 3,
    icon: logout,
    title: "title",
    name: "Logout",
  },
];
const UserDass = () => {
  const navigate = useNavigate();

  const onGetLogout = () => {
    navigate("/login");
  };
  return (
    <div className={styles.userDass}>
      <div className={styles.userDass_top}>
        <div className={styles.profile}>
          <div className={styles.profile_img}>
            <img src={profile} alt="title" />
          </div>
          <div>
            <p className={styles.profile_email}>ashish</p>
            <p className={styles.profile_name}>ashish@gmail.com </p>
          </div>
        </div>
      </div>
      <div className={styles.userDass_bot}>
        {userDass.map((it) => {
          return (
            <div key={it.id} className={styles.botItems}>
              <img src={it.icon} alt={it.title} />
              <p onClick={onGetLogout}>{it.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default UserDass;
