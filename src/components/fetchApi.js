import React , {Component} from 'react';

class Fetch extends React.Component {
    state = {
      isLoading: true,
      users: [],
      error: null
    };
  
    fetchUsers() {
      fetch(`https://jsonplaceholder.typicode.com/users`)
        .then(response => response.json())
        .then(data =>
          this.setState({
            users: data,
            isLoading: false,
          })
        )
        .catch(error => this.setState({ error, isLoading: false }));
    }
  
    componentDidMount() {
      this.fetchUsers();
    }
    render() {
      const { isLoading, users, error } = this.state;
      return (
        <React.Fragment>
          <h1>Random User</h1>
          {error ? <p>{error.message}</p> : null}
          {!isLoading ? (
            users.map((user,i) => {
              const { username, name, email } = user;
              return (
                <div key={i}>
                  <p>Name: {name}</p>
                  <p>User Name: {username}</p>
                  <p>Email Address: {email}</p>
                  <hr />
                </div>
              );
            })
          ) : (
            <h3>Loading...</h3>
          )}
        </React.Fragment>
      );
    }
  }
  
  export default Fetch;