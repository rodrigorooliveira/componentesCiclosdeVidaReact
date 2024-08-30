import './App.css';
import { Component } from 'react';

class App extends Component {
  state = {
    counter: 0,
    posts: [{
      id: 1,
      title: 'Tìtulo 1',
      body: 'o corpo 1'
    },
    {
      id: 2,
      title: 'Tìtulo 2',
      body: 'o corpo 2'
    },
    {
      id: 3,
      title: 'Tìtulo 3',
      body: 'o corpo 3'
    },
    {
      id: 4,
      title: 'Tìtulo 4',
      body: 'o corpo 4'
    },

    ]
  };
  timeoutUpdate = null;

  componentDidMount() {
    this.handleTimeout();
  }

  componentDidUpdate(){
       this.handleTimeout();
  }

  componentWillUnmount() {
    clearTimeout(this.timeoutUpdate);
  }

handleTimeout = () => {
  const { posts, counter } = this.state;
  posts[0].title = 'O Título Mudou!!!';

  this.timeoutUpdate = setTimeout(() => {
    this.setState({ posts, counter: counter + 1 });
  }, 1000);
}
  render() {
    const { posts, counter } = this.state;
    return (
      <div className="App">
        <h1>{counter}</h1>
        {posts.map(post => (
          <div key={post.id}>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    );
  }
}
export default App;