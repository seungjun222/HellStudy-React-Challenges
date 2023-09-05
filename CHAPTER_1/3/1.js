// BEFORE

// export default function Bio() {
//     return (
//       <div class="intro">
//         <h1>Welcome to my website!</h1>
//       </div>
//       <p class="summary">
//         You can find my thoughts here.
//         <br><br>
//         <b>And <i>pictures</b></i> of scientists!
//       </p>
//     );
//   }


// This HTML was pasted into a component, but it’s not valid JSX. Fix it:

// AFTER

export default function Bio() {
    return (
      <>
          <div className="intro">
            <h1>Welcome to my website!</h1>
          </div>
          <p className="summary">
            You can find my thoughts here.
            <br/>
            <b>And <i>pictures</i> of scientists!</b>
          </p>
      </>
    );
  }
  