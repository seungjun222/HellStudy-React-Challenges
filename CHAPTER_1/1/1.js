// BEFORE

function Profile() {
  return (
    <img
      src="https://i.imgur.com/lICfvbD.jpg"
      alt="Aklilu Lemma"
    />
  );
}

// Error
// Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: object. 
// You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.

// AFTER

export default function Profile() {
    return (
      <img
        src="https://i.imgur.com/lICfvbD.jpg"
        alt="Aklilu Lemma"
      />
    );
  }