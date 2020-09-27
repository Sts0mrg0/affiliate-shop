import { graphql } from "gatsby"
import React from "react"

export default props => {
  const positions = props
  console.log(positions)
  return (
    <div>
      <div id="position" name="foobar">
        <p>Hola header</p>
      </div>
    </div>
  )
}

export const query = graphql`
  {
    allHeaderJson {
      nodes {
        positions {
          name
          width
        }
      }
    }
  }
`
