import React from "react"

import { makeStyles } from "@material-ui/core/styles"

import HeaderLayout from "./header"
import FooterLayout from "./FooterLayout"

import PropTypes from "prop-types"

import ToTopButton from "./ToTopButton.js"

Layout.propTypes = {
  children: PropTypes.any.isRequired,
};

export default function Layout({ children }) {
  const useStyles = makeStyles(theme => ({
    contentWrapper: {
      minHeight: "calc(100vh - (8px + 64px + 600px + 56px + 8px))"
    },
    root: {
      backgroundColor: '#e3e3e3',
      [theme.breakpoints.up('xs')]: {
        width: '100%',
      },
      [theme.breakpoints.up('sm')]: {
        width: 768,
      },
      [theme.breakpoints.up('md')]: {
        width: 768,
      },
      [theme.breakpoints.up('lg')]: {
        width: 1080
      },
      [theme.breakpoints.up('xl')]: {
        width: 1080
      },
    }
  }))

  const classes = useStyles()

  return (
    <div
    className={classes.root}
      style={{
        position: "relative",
        margin: `0 auto`,
        padding: `0 0`,
      }}
    >
      <HeaderLayout />
      <div style={{
        minHeight: "calc(100vh - (8px + 64px + 600px + 56px + 8px))"
      }}>{children}</div>
      <FooterLayout />
      <ToTopButton></ToTopButton>
    </div>
  )
}
