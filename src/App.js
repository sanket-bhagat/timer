import "./styles.css";
import Heading from "./Heading";
import UpArrow from "./UpArrow";
import DownArrow from "./DownArrow";
import Time from "./Time";
import Button from "./Button";
import Footer from "./Footer";
import React, { useRef, useState, useEffect } from "react";

export default function App() {
  const [started, setStarted] = useState(false);
  const [paused, setPaused] = useState(false);
  const [hour, setHour] = useState(0);
  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState(0);
  const [visibility, setVisivility] = useState("visible");
  const [count, setcount] = useState(0);
  const [stop, setstop] = useState(true);
  const [goingOn, setGoingOn] = useState(false);
  let intervalRef = useRef();

  useEffect(() => {
    let myInterval;
    if (second + hour + minute <= 0) {
      console.log("timer stopped");
      setSecond(0);
      setMinute(0);
      setHour(0);
      setcount(0);
      setstop(true);
      setStarted(false);
      setVisivility(true);
    }

    if (started) {
      myInterval = setInterval(() => {
        if (second > 0) {
          console.log("sec changed");
          setSecond(second - 1);
          setcount(count + 1);
        }
        if (second === 0) {
          if (minute === 0) {
            if (hour === 0) {
              console.log("hour changed");
              setHour(hour - 1);
              setMinute(59);
              setcount(count + 1);
            } else {
              console.log("timer stopped");
              setSecond(0);
              setMinute(0);
              setstop(true);
              setHour(0);
              setVisivility(true);
              setStarted(false);
              clearInterval(myInterval);
            }
          } else {
            console.log("minute changed");
            setMinute(minute - 1);
            setSecond(59);
            setcount(count + 1);
          }
        }
      }, 1000);
    }
    return () => {
      clearInterval(myInterval);
    };
  }, [started, count]);

  // console.log(second);
  // if (hour + minute + second === 0) {
  //   stop();
  // }
  // if (second > 0) {
  //   setSecond(second - 1);
  // } else {
  //   if (minute > 0) {
  //     setMinute(minute - 1);
  //     setSecond(59);
  //   } else {
  //     if (hour > 0) {
  //       setHour(hour - 1);
  //       setMinute(59);
  //       setSecond(59);
  //     }
  //   }
  // }
  // decreaseTime("second");
  // if (second === 0) decreaseTime("minute");
  // if (minute === 0 && second === 0) decreaseTime("hour");

  //  const play=()=> {
  //   setStarted(true);
  //   setVisivility("hidden");
  //   // startTimer();
  //   // intervalRef.current = setInterval(startTimer, 1000);
  //   // clearInterval(intervalRef.current);
  // }
  const startTimer = () => {
    setStarted(true);
    setstop(false);
    setVisivility("hidden");
    setGoingOn(true);
  };

  function pause() {
    setPaused(true);
    setStarted(false);
    setstop(true);
    // intervalRef.current = setInterval(startTimer, 1000);
    // clearInterval(intervalRef.current);
  }

  function pausePlay() {
    setPaused(false);
    setStarted(true);
    setstop(false);
    // startTimer();
    // intervalRef.current = setInterval(startTimer, 1000);
    // clearInterval(intervalRef.current);
  }

  function stopTimer() {
    setHour(0);
    setMinute(0);
    setSecond(0);
    setStarted(false);
    setstop(false);
    setPaused(false);
    setVisivility("visible");
    setGoingOn(false);
    // intervalRef.current = setInterval(startTimer, 1000);
    clearInterval(intervalRef.current);
  }

  function increaseTime(name) {
    if (name === "hour") {
      if (hour === 99) setHour(0);
      else setHour((prevValue) => prevValue + 1);
    } else if (name === "minute") {
      if (minute === 59) setMinute(0);
      else setMinute((prevValue) => prevValue + 1);
    } else if (name === "second") {
      if (second === 59) setSecond(0);
      else setSecond((prevValue) => prevValue + 1);
    }
    // clearInterval(intervalRef.current);
  }

  function decreaseTime(name) {
    if (name === "hour") {
      if (hour === 0) setHour(99);
      else setHour((prevValue) => prevValue - 1);
    } else if (name === "minute") {
      if (minute === 0) setMinute(59);
      else setMinute((prevValue) => prevValue - 1);
    } else if (name === "second") {
      if (second === 0) setSecond(59);
      else setSecond((prevValue) => prevValue - 1);
    }
    if (hour === 0 && minute === 0 && second === 0) stop();
    // clearInterval(intervalRef.current);
  }

  const year = new Date().getFullYear();

  return (
    <div className="App">
      <Heading />
      <div className="container">
        <div className="row">
          {/* <UpArrow name="hour" onClick={increaseTime} visibility={visibility} /> */}
          <UpArrow
            name="minute"
            onClick={increaseTime}
            visibility={visibility}
          />
          <UpArrow
            name="second"
            onClick={increaseTime}
            visibility={visibility}
          />
        </div>
        <div className="row">
          {/* <Time time={hour} /> */}
          <Time time={minute} />
          <Time time={second} />
        </div>
        <div className="row">
          {/* <DownArrow
            name="hour"
            onClick={decreaseTime}
            visibility={visibility}
          /> */}
          <DownArrow
            name="minute"
            onClick={decreaseTime}
            visibility={visibility}
          />
          <DownArrow
            name="second"
            onClick={decreaseTime}
            visibility={visibility}
          />
        </div>
        <div className="row">
          {!started && stop && !paused && (
            <Button
              ofType="fas fa-play"
              colSize="col-12"
              onClick={startTimer}
            />
          )}
          {started && !paused && (
            <Button ofType="fas fa-pause" colSize="col-6" onClick={pause} />
          )}
          {!started && paused && (
            <Button ofType="fas fa-play" colSize="col-6" onClick={pausePlay} />
          )}
          {goingOn && (
            <Button ofType="fas fa-stop" colSize="col-6" onClick={stopTimer} />
          )}
        </div>
      </div>
      <Footer year={year} />
    </div>
  );
}
