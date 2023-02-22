import { useEffect, useState } from "react";

const useCountdown = (targetDate: string | number | Date) => {
  // const dateTime = `${targetDate} 23:59:59`;
  // const countDownDate = new Date(dateTime).getTime();
  const countDownDate = new Date(targetDate).getTime();

  const [countDown, setCountDown] = useState(
    countDownDate - new Date().getTime()
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCountDown(countDownDate - new Date().getTime());
    }, 1000);
    return () => clearInterval(interval);
  }, [countDownDate]);
  return getReturnValues(countDown);
};

const getReturnValues = (countDown: number | any) => {
  // calculate time left
  const days = Math.floor(countDown / (1000 * 60 * 60 * 24))
    .toString()
    .padStart(2, "0");
  const hours = Math.floor(
    (countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  )
    .toString()
    .padStart(2, "0");
  const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60))
    .toString()
    .padStart(2, "0");
  const seconds = Math.floor((countDown % (1000 * 60)) / 1000)
    .toString()
    .padStart(2, "0");

  return [days, hours, minutes, seconds];
};

export { useCountdown };
