// This Drink component uses a series of ? : conditions to show different information depending on whether the name prop is "tea" or "coffee". 
// The problem is that the information about each drink is spread across multiple conditions. 
// Refactor this code to use a single if statement instead of three ? : conditions.

function Drink({ name }) {
    let part, caffeine, age;
    if (name === 'tea') {
      part = 'leaf';
      caffeine = '15–70 mg/cup';
      age = '4,000+ years';
    } else if (name === 'coffee') {
      part = 'bean';
      caffeine = '80–185 mg/cup';
      age = '1,000+ years';
    }
    return (
      <section>
        <h1>{name}</h1>
        <dl>
          <dt>Part of plant</dt>
          <dd>{part}</dd>
          <dt>Caffeine content</dt>
          <dd>{caffeine}</dd>
          <dt>Age</dt>
          <dd>{age}</dd>
        </dl>
      </section>
    );
  }
  
  export default function DrinkList() {
    return (
      <div>
        <Drink name="tea" />
        <Drink name="coffee" />
      </div>
    );
  }
  