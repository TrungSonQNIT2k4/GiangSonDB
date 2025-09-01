import { Outlet, useLocation } from "react-router-dom";
import Nav from "./Nav";
import { AnimatePresence, motion as Motion } from "framer-motion";

const layoutVariants = {
  initial: { opacity: 0, y: 400 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  exit: { opacity: 0, y: -400, transition: { duration: 0.3 } },
};

export default function Layout() {
  const location = useLocation();

  return (
    <div
      className="layoutDB"
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        alignItems: "center",
        fontFamily: "Roboto",
      }}
    >
      <Nav />
      <main
        style={{
          height: "90%",
          width: "72%",
        }}
      >
        <AnimatePresence mode="wait">
          <Motion.div
            key={location.pathname}
            variants={layoutVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              justifyItems: "center",
              alignItems: "center",
            }}
          >
            <Outlet />
          </Motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}
