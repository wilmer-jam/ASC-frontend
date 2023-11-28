import { useState } from "react";
import { useIdleTimer } from "react-idle-timer";
/**
 * @param onIdle - function to notify user when idle timeout is close
 * @param idleTime - number of seconds to wait before user is logged out
 */
const useIdleTimeout = ({ onIdle, idleTime = 1 }) => {
  const idleTimeout = 1000 * idleTime;
  const [isIdle, setIdle] = useState(false);
  const handleIdle = () => {
    setIdle(true);
  };
  const idleTimer = useIdleTimer({
    timeout: idleTimeout,
    promptBeforeIdle: idleTimeout / 2,
    onPrompt: onIdle,
    onIdle: handleIdle,
    debounce: 500,
  });
  return {
    isIdle,
    setIdle,
    idleTimer,
  };
};
export default useIdleTimeout;
