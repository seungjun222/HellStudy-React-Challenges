// BEFORE
export default function Canvas() {
  const [shape, setShape] = useState({
    color: 'orange',
    position: initialPosition
  });

  function handleMove(dx, dy) {
    shape.position.x += dx;
    shape.position.y += dy;
  }

  function handleColorChange(e) {
    setShape({
      ...shape,
      color: e.target.value
    });
  }
}
  
// AFTER
export default function Canvas() {
const [shape, updateShape] = useImmer({ // useState 대신 useImmer
    color: 'orange',
    position: initialPosition
});

function handleMove(dx, dy) {
    updateShape(draft => {
    draft.position.x += dx;
    draft.position.y += dy;
    });
}

function handleColorChange(e) {
    updateShape(draft => { // draft 쓰면 ...shape 안 써도 됨
    draft.color = e.target.value;
    });
}
}