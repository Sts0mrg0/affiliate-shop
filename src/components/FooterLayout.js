import React from "react"

import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: 'black',
    color: 'white',
    paddingTop: '2em',
    paddingBottom: '2em'
  },
  listWrapper: {
    display: 'flex',
    flexWrap: 'wrap',
    margin: 0,
    padding: 0
  },
  list: {
    width: '33%',
    textAlign: 'center',
    listStyle: 'none',
    [theme.breakpoints.up('xs')]: {
        width: '100%',
      },
      [theme.breakpoints.up('sm')]: {
        width: '50%',
      },
      [theme.breakpoints.up('md')]: {
        width: '50%',
      },
      [theme.breakpoints.up('lg')]: {
        width: '33%',
      },
      [theme.breakpoints.up('xl')]: {
        width: '33%',
      },
  }
  }));


export default () => {
  const classes = useStyles()
  const [value, setValue] = React.useState(0)
  return (
    <div
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue)
      }}
      className={classes.root}
    >
      <ul className={classes.listWrapper}>
        <li className={classes.list}>Oferta 1</li>
        <li className={classes.list}>Oferta 1</li>
        <li className={classes.list}>Oferta 1</li>
        <li className={classes.list}>Oferta 1</li>
        <li className={classes.list}>Oferta 1</li>
        <li className={classes.list}>Oferta 1</li>
        <li className={classes.list}>Oferta 1</li>
        <li className={classes.list}>Oferta 1</li>
        <li className={classes.list}>Oferta 1</li>
        <li className={classes.list}>Oferta 1</li>
        <li className={classes.list}>Oferta 1</li>
        <li className={classes.list}>Oferta 1</li>
      </ul>
    </div>
  )
}
