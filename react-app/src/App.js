import Todo from './components/Todo';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

import './App.css'

const client = new ApolloClient({
  uri: 'http://localhost:3000/graphql', //golangでのapollo server構築がまだなのでダミーです
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client} fallback={<div>Loading...</div>}>
      <header>
        <a href='/'>
          <h1 className='Title'>Todo List</h1>
        </a>
      </header>
        <Todo />
    </ApolloProvider>
  );
}

export default App;