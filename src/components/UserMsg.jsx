import classNames from "classnames";
import React, { useEffect, useState } from "react";
import { eventBusService } from "../services/event-bus.service";

const UserMsg = () => {
  const [msg, setMsg] = useState(null);

  useEffect(() => {
    const removeEvent = eventBusService.on("show-user-msg", (newMsg) => {
      setMsg(newMsg);
      setTimeout(() => {
        setMsg(null);
      }, 4000);
    });

    return () => {
      removeEvent();
    };
  }, []);

  if (!msg) return <></>;

  const msgType = msg.type || "";

  return (
    <section
      className={classNames(
        "user-msg  flex direction-row align-center",
        msgType
      )}
    >
      <div className="txt-msg flex direction-row align-center">{msg.txt}</div>
      <button onClick={() => setMsg(null)}>x</button>
    </section>
  );
};

export default UserMsg;
