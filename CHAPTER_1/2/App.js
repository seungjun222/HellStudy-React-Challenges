// Currently, Gallery.js exports both Profile and Gallery, which is a bit confusing.

// Move the Profile component to its own Profile.js, and then change the App component to render both <Profile /> and <Gallery /> one after another.

// You may use either a default or a named export for Profile, but make sure that you use the corresponding import syntax in both App.js and Gallery.js! 
// You can refer to the table from the deep dive above:

// BEFORE

import Gallery from './Gallery.js';
import { Profile } from './Gallery.js';

export default function App() {
  return (
    <div>
      <Profile />
    </div>
  );
}

// AFTER
import Gallery from './Gallery.js';
import { Profile } from './Profile.js';

export default function App() {
  return (
    <div>
      <Profile />
      <Gallery />
    </div>
  );
}