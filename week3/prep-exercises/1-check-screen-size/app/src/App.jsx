import useWindowSize from "./useWindowSize";
import ShowAvatar from "./ShowAvatar";

function App() {
  const { width, height } = useWindowSize();

  return (
    <>
      <div>Width of the screen is {width}px</div>
      <div>height of the screen is {height}px</div>
      <div>
        <ShowAvatar size={width} />
      </div>
    </>
  );
}

export default App;
