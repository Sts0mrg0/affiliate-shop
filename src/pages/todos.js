import { graphql } from "gatsby"
import React from "react"
import Layout from "../components/layout"

export default props => {
  const todos = props.data.allTodosJson.nodes
  return (
    <Layout>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}> {todo.description} </li>
        ))}
      </ul>
    </Layout>
  )
}

export const query = graphql`
  {
    allTodosJson {
      nodes {
        description
        id
        points
      }
    }
  }
`
