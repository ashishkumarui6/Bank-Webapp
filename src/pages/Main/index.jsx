import React, { useEffect, useState } from "react";
import styles from "./index.module.css";
import Layout from "../../ui/layout";
import AsideMenu from "../../helper/AsideMenu";
import { Navigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Question from "../../components/Question";
import UserDass from "../../components/UserDass";
import Notification from "../../components/Notification";
import { uiActions } from "../../store/ui";
import PasswordCard from "../../components/PasswordCard";
import AllModal from "../../AllModal";

const Main = ({ element }) => {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");
  const isModalName = useSelector((state) => state.ui.isModalName);

  if (!token) {
    return <Navigate to="/login" />;
  }

  const toggle = () => {
    setShow(!show);
  };
  const { pathname } = useLocation();

  useEffect(() => {
    setShow(false);
  }, [pathname]);

  return (
    <>
      {isModalName && (
        <div
          onClick={() => dispatch(uiActions.onModalOpen({ name: "" }))}
          style={{
            background: "rgba(0,0,0,.5)",
            zIndex: 100,
            height: "100%",
            width: "100%",
            position: "fixed",
          }}
        ></div>
      )}
      {isModalName === "faq" && <Question />}
      {isModalName === "notification" && <Notification />}
      {isModalName === "profile" && <UserDass />}
      {isModalName === "pinBtn" && <PasswordCard />}
      {isModalName === "addBtn" && (
        <AllModal>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
          fuga fugit esse doloremque corporis omnis debitis commodi, ipsam
          voluptas repellat ut iste voluptates quia, animi tenetur! Quia omnis
          repellat saepe nihil ratione, reiciendis at explicabo odit distinctio
          nobis voluptate ullam impedit debitis velit ducimus est illum dolorem
          dolores aspernatur fugit. Obcaecati, libero quisquam? Laudantium unde
          debitis sit quaerat culpa quae ipsa sequi fugit officia! Maxime cum
          modi, amet quae vel et, fugit doloribus placeat mollitia repudiandae
          sint ipsum nostrum sit, deserunt illum. Facere numquam nihil
          dignissimos, atque a dolor molestias totam explicabo quidem odio ipsam
          quae deserunt voluptatibus itaque in!
        </AllModal>
      )}

      {isModalName === "managepay" && (
        <AllModal>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem quos
            nobis optio facilis minus a velit praesentium commodi possimus ipsa!
          </p>
        </AllModal>
      )}

      {isModalName === "Scan QR" && (
        <AllModal>
          <h1>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure,
            rerum. Dolorem minima maxime quidem, magnam possimus omnis at autem
            cupiditate aut ducimus in natus maiores facere. Dolore, blanditiis
            unde ullam sint facilis ut eius animi rerum? Totam doloremque soluta
            quam repellat, id sunt ullam, ipsa dignissimos iusto commodi
            deserunt similique!
          </h1>
        </AllModal>
      )}
      {isModalName === "Bank Transfer" && (
        <AllModal>
          <h1>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure,
            rerum. Dolorem minima maxime quidem, magnam possimus omnis at autem
            cupiditate aut ducimus in natus maiores facere. Dolore, blanditiis
            unde ullam sint facilis ut eius animi rerum? Totam doloremque soluta
            quam repellat, id sunt ullam, ipsa dignissimos iusto commodi
            deserunt similique!
          </h1>
        </AllModal>
      )}
      {isModalName === "Phone Number" && (
        <AllModal>
          <h1>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure,
            rerum. Dolorem minima maxime quidem, magnam possimus omnis at autem
            cupiditate aut ducimus in natus maiores facere. Dolore, blanditiis
            unde ullam sint facilis ut eius animi rerum? Totam doloremque soluta
            quam repellat, id sunt ullam, ipsa dignissimos iusto commodi
            deserunt similique!
          </h1>
        </AllModal>
      )}
      {isModalName === "UPI ID" && (
        <AllModal>
          <h1>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure,
            rerum. Dolorem minima maxime quidem, magnam possimus omnis at autem
            cupiditate aut ducimus in natus maiores facere. Dolore, blanditiis
            unde ullam sint facilis ut eius animi rerum? Totam doloremque soluta
            quam repellat, id sunt ullam, ipsa dignissimos iusto commodi
            deserunt similique!
          </h1>
        </AllModal>
      )}

      {show && <AsideMenu toggle={toggle} />}
      <Layout toggle={toggle}>
        <div className={styles.Root_root}>{element}</div>
      </Layout>
    </>
  );
};

export default Main;
