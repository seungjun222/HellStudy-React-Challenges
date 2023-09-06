// BEFORE
const initialPosition = {
  x: 0,
  y: 0
};
export default function Canvas() {
  const [shape, setShape] = useState({
    color: 'orange',
    position: initialPosition
  });

  function handleMove(dx, dy) {
    shape.position.x += dx;
    shape.position.y += dy;
  }
}

// AFTER
const initialPosition2 = {
    x: 0,
    y: 0
  };
  export default function Canvas() {
    const [shape, setShape] = useState({
      color: 'orange',
      position: initialPosition
    });
  
    function handleMove(dx, dy) {
      setShape({
        ...shape, // 핵심
        position: {
          x: shape.position.x + dx,
          y: shape.position.y + dy,
        }
      });
    }
}  