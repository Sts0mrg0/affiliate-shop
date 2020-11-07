import React from "react"
import { graphql } from 'gatsby'
import Layout from "../components/layout"
import InfiniteScroll from "../components/InfiniteScroll"

import PropTypes from 'prop-types'

Home.propTypes = {
  data: PropTypes.object,
}

export default function Home(props) {
  const productos = props.data.allHomeJson.nodes[0].productos

  return (
    <Layout>
        <InfiniteScroll items={productos}></InfiniteScroll>
    </Layout>
  )
}

export const query = graphql`
  {
    allHomeJson {
      nodes {
        productos {
          id
          image
          title
        }
        noticias {
          content
          id
          rating
          title
        }
      }
    }
  }
`

