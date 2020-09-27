import { graphql } from "gatsby"
import React from "react"

export default props => {
  const positions = props
  console.log(positions)
  return (
    <div>
      <div id="position" name="foobar">
        <p>Hi dummy Footer</p>
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
