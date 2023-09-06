export default function LightSwitch() {
    function handleClick() {
      let bodyStyle = document.body.style;
      if (bodyStyle.backgroundColor === 'black') {
        bodyStyle.backgroundColor = 'white';
      } else {
        bodyStyle.backgroundColor = 'black';
      }
    }
  
    return (
      // handleClick()은 함수가 렌더링될 때 즉시 호출되는 것을 의미합니다. 
      // 따라서 올바른 방법은 이 함수를 렌더링 시에 호출하지 않고
      // 클릭 이벤트에 대한 핸들러로만 전달하는 handelClick입니다.
      <button onClick={handleClick}> 
        Toggle the lights
      </button>
    );
  }
  