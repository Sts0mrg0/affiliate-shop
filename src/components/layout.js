import React from "react"
import HeaderLayout from "../components/HeaderLayout"
import FooterLayout from "./FooterLayout"

export default function Layout({ children }) {
  return (
    <div
      style={{
        position: "relative",
        margin: `0 auto`,
        maxWidth: 650,
        padding: `0 1rem`,
      }}
    >
      <HeaderLayout />
      {children}
      <FooterLayout />
    </div>
  )
}
