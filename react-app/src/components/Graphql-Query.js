import gql from 'graphql-tag';
import { Query } from 'react-apollo';

const GET_TODO_LIST = gql`
  query {
    todos {
      id
      text
      completed
    }
  }
`;

function TodoList() {
  return (
    <Query query={GET_TODO_LIST}>
      {({ loading, error, data }) => {
        if (loading) return <p>Loading...</p>;
        if (error) return <p>Error :(</p>;

        return data.todos.map(({ id, text, completed }) => (
          <div key={id}>
            <p>{text}</p>
            <p>{completed.toString()}</p>
          </div>
        ));
      }}
    </Query>
  );
}
