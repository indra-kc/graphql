import { useState } from 'react'
// import './App.css'
// import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';
import {useQuery,gql} from '@apollo/client'
import { addTypenameToDocument } from '@apollo/client/utilities';

// const client = new ApolloClient({
//   uri: 'http://localhost:8000/graphql',
//   cache: new InMemoryCache(),
// });

// const query = `
//   getTodos {
//     completed
//     id
//     title
//  }
// `




//with using ApolloProvider


const query = gql`
  query GetTodos{ 
   getTodos {
    completed
    id
    title
 }
}
`


function App() {

  const{data,loading}=useQuery(query);
  const [count, setCount] = useState(0)

  if(loading) return <h1>loading...</h1>

  console.log("data are:",data);

  return (
   
   <>
   <div>
    <table>
      <tbody>
       { data.getTodos.map((todo:any) => (<tr key={todo.id}>
          <td>{todo.title}</td>
          <td>{todo?.user?.name}</td>
            </tr>))}
      </tbody>
    </table>
   </div>
   </>
  )
}

export default App
