//function equivalent
// function likeCounter(props){
//     return <h1>Hello, {props.name}</h1>
// }

// //React
// class Welcome extends React.Component{
//     render(){
//         return <h1>Hello, {this.props.name}</h1>
//     }
// }
// const root = ReactDOM.createRoot(document.getElementById('root'))
// const element = <Welcome name="Sara"/>
// root.render(element);

//counter code: https://stackoverflow.com/questions/60289140/react-click-counter-updating-state-of-just-one-element
// class Counter extends React.Component {
//     state = {
//       count: 0
//     };
  
//     handleClick = () => {
//       // Use updater function when new state is derived from old
//       this.setState(prev => ({ count: prev.count + 1 }));
//     };
  
//     render() {
//       return (
//         <button className="block" onClick={this.handleClick}>
//           <div className="counter">{this.state.count}</div>
//         </button>
//       );
//     }
//   }
  
//   // Now you can use it dynamically like this:
//   class Block extends React.Component {
//     render() {
//       return (
//         <div>
//           <div>There are 4 counter component instances that each manage their own state.</div>
//           {[1,2,3,4].map(v => <Counter />)}
//         </div>
//       );
//     }
//   }
  
//   ReactDOM.render(<Block />, document.getElementById('root'));