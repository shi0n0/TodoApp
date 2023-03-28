import Todo from './components/Todo';
import './App.css'
import { ApolloProvider } from '@apollo/client';
import { client } from './graphql/client';

function App() {
  return (
    <ApolloProvider client={client}>
      <>
      <header>
        <a href='/'>
          <h1 className='Title'>Todo List</h1>
        </a>
      </header>
        <Todo />
      </>
    </ApolloProvider>
  );
}

export default App;