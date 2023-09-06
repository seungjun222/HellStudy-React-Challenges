export default function ColorSwitch({
    onChangeColor
  }) {
    return (
      <button onClick={e => {
        e.stopPropagation(); // 핵심1
        onChangeColor(); // 핵심2
      }}>
        Change color
      </button>
    );
  }
  