// BEFORE

// const person = {
//     name: 'Gregorio Y. Zara',
//     theme: {
//       backgroundColor: 'black',
//       color: 'pink'
//     }
//   };
  
//   export default function TodoList() {
//     return (
//       <div style={person.theme}>
//         <h1>{person}'s Todos</h1>
//         <img
//           className="avatar"
//           src="https://i.imgur.com/7vQD0fPs.jpg"
//           alt="Gregorio Y. Zara"
//         />
//         <ul>
//           <li>Improve the videophone</li>
//           <li>Prepare aeronautics lectures</li>
//           <li>Work on the alcohol-fuelled engine</li>
//         </ul>
//       </div>
//     );
//   }
  
// Error
// Objects are not valid as a React child (found: object with keys {name, theme}). If you meant to render a collection of children, use an array instead.

// AFTER

const person = {
    name: 'Gregorio Y. Zara',
    theme: {
      backgroundColor: 'black',
      color: 'pink'
    }
  };
  
  export default function TodoList() {
    return (
      <div style={person.theme}>
        <h1>{person.name}'s Todos</h1>
        <img
          className="avatar"
          src="https://i.imgur.com/7vQD0fPs.jpg"
          alt="Gregorio Y. Zara"
        />
        <ul>
          <li>Improve the videophone</li>
          <li>Prepare aeronautics lectures</li>
          <li>Work on the alcohol-fuelled engine</li>
        </ul>
      </div>
    );
  }