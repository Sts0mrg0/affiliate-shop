import React from "react"
import Layout from "../components/layout"

export default () => {
  return (
    <Layout style={relative}>
      <div style={mainboxStyle} />
      <div style={err}>4</div>
      <div style={err1}>0</div>
      <div style={err2}>4</div>
      <div style={msg}>
        Maybe this page moved? Got deleted? Is hiding out in quarantine? Never
        existed in the first place?
        <p>
          Let's go <a href="/">home</a> and try from there.
        </p>
      </div>
    </Layout>
  )
}

const relative = {
  position: "relative",
}

const mainboxStyle = {
  backgroundColor: "#95c2de",
  margin: "auto",
  height: "600px",
  width: "600px",
  position: "relative",
}

const err = {
  color: "#ffffff",
  fontFamily: "Nunito Sans, sans-serif",
  fontSize: "11rem",
  position: "absolute",
  left: "20%",
  top: "8%",
}

const err1 = {
  color: "#ffffff",
  fontFamily: "Nunito Sans, sans-serif",
  fontSize: "11rem",
  position: "absolute",
  left: "45%",
  top: "8%",
}

const err2 = {
  color: "#ffffff",
  fontFamily: "Nunito Sans, sans-serif",
  fontSize: "11rem",
  position: "absolute",
  left: "68%",
  top: "8%",
}

const msg = {
  textAlign: "center",
  fontFamily: "Nunito Sans, sans-serif",
  fontSize: "1.6rem",
  position: "absolute",
  left: "16%",
  top: "45%",
  width: "75%",
}

const far = {
  position: "absolute",
  fontSize: "8.5rem",
  left: "42%",
  top: "15%",
  color: "#ffffff",
}
