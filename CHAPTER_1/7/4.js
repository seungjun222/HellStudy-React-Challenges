// BEFORE
// const poem = {
//     lines: [
//       'I write, erase, rewrite',
//       'Erase again, and then',
//       'A poppy blooms.'
//     ]
//   };
  
//   export default function Poem() {
//     return (
//       <article>
//         {poem.lines.map((line, index) =>
//           <p key={index}>
//             {line}
//           </p>
//         )}
//       </article>
//     );
//   }

  // This example renders a famous haiku by Katsushika Hokusai, with each line wrapped in a <p> tag. 
// Your job is to insert an <hr /> separator between each paragraph. Your resulting structure should look like this:

// <article>
//   <p>I write, erase, rewrite</p>
//   <hr />
//   <p>Erase again, and then</p>
//   <hr />
//   <p>A poppy blooms.</p>
// </article>

// A haiku only contains three lines, but your solution should work with any number of lines. 
// Note that <hr /> elements only appear between the <p> elements, not in the beginning or the end!

// AFTER 
const poem = {
    lines: [
      'I write, erase, rewrite',
      'Erase again, and then',
      'A poppy blooms.'
    ]
  };
  
  export default function Poem() {
    let output = [];
  
    poem.lines.forEach((line, i) => {
      output.push(
        <hr key={i + '-separator'} />
      );
      output.push(
        <p key={i + '-text'}>
          {line}
        </p>
      );
    });
    output.shift();
  
    return (
      <article>
        {output}
      </article>
    );
  }
  