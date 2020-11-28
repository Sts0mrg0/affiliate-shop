import React from "react"
import Button from "@material-ui/core/Button"
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import HourglassFullIcon from '@material-ui/icons/HourglassFull';
import { makeStyles } from "@material-ui/core/styles"
import Paper from "@material-ui/core/Paper"
import Grid from "@material-ui/core/Grid"

import PropTypes from 'prop-types'

const useStyles = makeStyles({
  title: {
    textAlign: "center",
  },
  img: {
    width: "15%",
    height: "auto",
  },
  imgWrapper: {
    textAlign: "center",
    marginBottom: "1.2em",
  },
  paper: {
    padding: "5px",
    textAlign: "center",
    color: "black",
    boxShadow: "5px 5px 10px"
  },
  button: {
    width: "100%",
  },
  mainContent: {
    paddingLeft: '24px',
    paddingRight: '24px',
    paddingBottom: '22px'
  }
})

InfiniteScroll.propTypes = {
  items: PropTypes.array,
};

export default function InfiniteScroll(props) {
  const classes = useStyles()
  const productos = props.items
  // State for storing list of posts
  const [posts, setPosts] = React.useState([])
  // Store current index of posts
  const [startIndex, setStartIndex] = React.useState(0)
  const [isLoading, setLoading] = React.useState(false)

  const LoadMorePosts = async () => {
    // Load 10 more
    setStartIndex(prev => prev + 10)
  }

  React.useEffect(() => {
    (async () => {
      setLoading(true)
      // Add search range to url
      const url = `?start=${startIndex}&end=${startIndex + 10}`
      const posts = await mockApi(url, productos)
      // Append new posts to end of old ones
      setPosts(prev => [...prev, ...posts])
      setLoading(false)
    })()
  }, [startIndex])

  const listPosts = posts.map(
    (post, index) =>
      posts.length - 1 >= index && (
        <Post key={post.id} id={post.id}>
          <Grid item xs={12} sm={6} md={6} lg={4}>
            <Paper className={classes.paper}>
              <h2 className={classes.title}>{post.title}</h2>
              <div className={classes.imgWrapper}>
                <img className={classes.img} src={post.image}></img>
              </div>
            </Paper>
          </Grid>
        </Post>
      )
  )

  return (
    <Grid className={classes.mainContent} container spacing={3}>
      {listPosts}
      <Grid item xs={12} sm={12} lg={12}>
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          startIcon={ !isLoading ? <ExpandMoreIcon /> : <HourglassFullIcon /> }
          onClick={LoadMorePosts}
        >
          {isLoading ? "loading more..." : "Load More"}
        </Button>
      </Grid>
    </Grid>
  )
}

/**
 * Use React.memo to avoid extra renders
 */
const Post = React.memo(({ children, id }) => {
  return children
})

/**
 * Mock functionality of actual API, not relevant for this example
 */

const mockApi = (url, productos) => {
  const postsInApi = productos

  return new Promise(res => {
    setTimeout(() => {
      let [start, end] = url.split("&")
      start = start.split("=")[1]
      end = end.split("=")[1]
      res(postsInApi.slice(start, end))
    }, 1000) // Manual trothle for visual purposes
  })
}
