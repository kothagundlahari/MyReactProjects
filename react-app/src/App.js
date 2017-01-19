import React from 'react';

// class App extends React.Component {
//   render () {
//     return React.createElement('h1', 'null', 'Hello World');
//   }

// }
// const App = () => <h1> Hello World!!by stateless </h1 >;

class App extends React.Component {
    render() {
        // return <h1>Hello world by Class Component </h1>;
        return ( <
            div >
            <
            h1 > This is multiple line in div example < /h1> <
            b > This is some bold text < /b> <
            /div>
        );
    }
}

export default App;