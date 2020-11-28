import { StaticQuery, graphql } from "gatsby"
import React from "react"
import Paper from "@material-ui/core/Paper"

import ReactStars from "react-stars"
import Slider from "react-slick"
import ReactCountryFlag from "react-country-flag"

import { makeStyles } from "@material-ui/core/styles"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import IconButton from "@material-ui/core/IconButton"
import MenuIcon from "@material-ui/icons/Menu"

import "../../node_modules/slick-carousel/slick/slick.css"
import "../../node_modules/slick-carousel/slick/slick-theme.css"

import { AiFillLike } from "react-icons/ai"
import { Hidden } from "@material-ui/core"

import PropTypes from 'prop-types'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  sliderWrapper: {
    margin: "auto",
    width: "100%",
  },
  appBar: {
    position: "relative",
    zIndex: 999,
  },
  cardOpinion: {
    [theme.breakpoints.up('xs')]: {
      width: '100%',
      height: 'auto'
    },
    [theme.breakpoints.up('sm')]: {
      display: "flex !important",
      height: "100%",
      outline: "none",
      boxShadow: "5px 5px 10px",
      padding: '1em 0'
    },
    paddingBottom: '10px'
  },
  imgBox: {
    position: "relative",
    flex: 1,
  },
  img: {
    [theme.breakpoints.up('xs')]: {
      width: '50%',
      margin: '0 auto',
      objectFit: 'cover'
    },
    [theme.breakpoints.up('sm')]: {
      objectFit: "cover",
      position: "absolute",
      top: "50%",
      transform: "translate(-50%, -50%)",
      width: "85%",
      left: "50%",
      margin: "0 auto",
    }
  },
  reseniaBox: {
    flex: 1.5,
  },
  reseniaWrapper: {
    marginRight: 0,
    display: 'flex'
  },
  ratingsWrapper: {
    flex: 1,
    display: "inline-flex",
    flexDirection: "column"
  },
  infoWrapper: {
    flex: 2,
    display: "table-cell",
    paddingLeft: "1.5em",
  },
  centerVertically: {
    position: "absolute",
    top: "50%",
    transform: "translate(-50%, -50%)",
    width: "50%",
    left: "50%",
    margin: "0 auto",
  },
  topSlider: {
    display: "block",
        width: '100%'
  },
  flagObj: {
    flex: 2,
    width: '47px !important'
  },
  mensajeObj: {
    flex: 1,
    fontFamily: "JosefinSlab-regular",
    marginBottom: 0,
    marginTop: 0,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 3
  },
  modelObj: {
    flex: 4,
    fontFamily: "AdventPro-regular",
    whiteSpace: 'nowrap',
    minWidth: 89
  },
  dateObj: {
    flex: 4,
    fontFamily: "Buenard-regular",
  },
  likesObj: {
    flex: 1
  },
  reseniaInfoWrapper: {
    display: "flex",
  },
  autorObj: {
    fontStyle: 'bold',
    marginBottom: 0,
    marginTop: 0,
    paddingTop: theme.spacing(0)
  },
  starsObj: {
    flex: 1,
    whiteSpace: "nowrap",
    bottom: 0,
    left: '50%',
    position: "absolute !important",
    transform: 'translateX(-50%)'
  },
  starsWrapper: {


    [theme.breakpoints.up('xs')]: {
      flex: 1,
      position: "relative",
      textAlign: 'center',
    },
    [theme.breakpoints.up('sm')]: {
      flex: 1,
      position: "relative",
      textAlign: 'center',
      width: '100%',
    }
  },
  cards: {
    padding: 20
  },
  capitalize: {
     textTransform: 'capitalize'
  },
  likesBlock: {
    textAlign: 'center'
  }
}))

InfoWrapper.propTypes = {
  resenia: PropTypes.object,
  indice: PropTypes.number
};

function InfoWrapper(props) {
  const classes = useStyles()
  return (
    <div className={classes.infoWrapper}>
      <div>
        <p className={classes.autorObj}>
          De <span className={classes.capitalize}>{props.resenia.autor && props.resenia.autor}</span>:
        </p>
      </div>

      <div>
        <p className={classes.mensajeObj}>
          {props.resenia.mensaje && props.resenia.mensaje}
        </p>
      </div>

      <div className={classes.reseniaInfoWrapper}>
        <ReactCountryFlag
          className={classes.flagObj}
          countryCode={props.resenia.idioma && props.resenia.idioma}
          svg
        />
        <span className={classes.modelObj}>
          {props.resenia.color && props.resenia.color}
        </span>
        <span className={classes.dateObj}>
          {props.resenia.fecha && props.resenia.fecha}
        </span>
      </div>
    </div>
  )
}

export default function HeaderLayout(props) {
  const classes = useStyles()
  /*const images = [
    "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRYi55h4VHmsA40aCEC7qmFzdMczxIFbYXZHZw-6N2GDrV2FFOC_orAjlrOyw&usqp=CAY",
    "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRPv73YcRSN0BazCxU3ZLwNgYen42535aF45Zlq-0tYEZXLNTqn31spSYPFzWhIJtj4CruNGmk&usqp=CAY",
    "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTDSeVCo5tiKYVWfsmz4vNwJQ0dIqdEK7V6_3G8UeEzTeJFrExxqqmumL6LBfjnY3VsUhODNBjd&usqp=CAE",
    "https://www.manelsanchez.com/uploads/media/images/396x396/xnike-precision-iv-black-1.jpg.pagespeed.ic.SP0KhtNm-W.webp",
  ]*/
  return (
    <div className={classes.root}>
      <AppBar id="topbar" position="static" className={classes.appBar}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Bonitas zapatillas
          </Typography>
        </Toolbar>
      </AppBar>
      <div id="eeeeetoro" className={classes.sliderWrapper}>
        <StaticQuery
          query={graphql`
            query HeadingQuery {
              allHeaderJson {
                nodes {
                  opiniones {
                    id
                    listaOpiniones {
                      color
                      fecha
                      id
                      idioma
                      likes
                      mensaje
                      rating
                      autor
                    }
                    producto {
                      foto
                      nombre
                    }
                  }
                }
              }
            }
          `}
          render={data => {
            const opiniones = data.allHeaderJson.nodes[0].opiniones

            const listOpiniones = opiniones.map(opinion => {
              return (
                <Paper key={opinion.id} className={classes.cardOpinion}>
                  <div className={classes.imgBox}>
                    <img
                      className={classes.img}
                      alt="opinion del producto"
                      src={opinion.producto.foto}
                    />
                  </div>
                  <div className={classes.reseniaBox}>
                    {opinion.listaOpiniones.map((resenia,index) => {
                      return (
                        <div
                          className={classes.reseniaWrapper}
                          key={resenia.id}
                        >
                          <div className={classes.ratingsWrapper}>
                            <div className={classes.starsWrapper}>
                                <ReactStars
                                className={classes.starsObj}
                                edit={false}
                                count={5}
                                value={resenia.rating}
                                onChange={false}
                                size={24}
                                color2={"#ffd700"}
                              />
                            </div>
                            <div className={classes.likesObj}>
                              <div className={classes.likesBlock}><AiFillLike/> {resenia.likes}</div>
                            </div>
                          </div>

                          <InfoWrapper indice={index} resenia={resenia}></InfoWrapper>
                        </div>
                      )
                    })}
                  </div>
                </Paper>
              )
            })

            return (
              <div className={classes.cards}>
                <Slider
                  centerMode={false}
                  arrows={false}
                  className={classes.topSlider}
                >
                  {listOpiniones}
                </Slider>
              </div>
            )
          }}
        />

        {/*<MuiImageSlider
          id="eeeeetoriiiito"
          className={classes.slider}
          autoPlay={false}
          arrows={true}
          alwaysShowArrows={true}
          images={images}
          fitToImageHeight={false}
        />*/}
      </div>
    </div>
  )
}
