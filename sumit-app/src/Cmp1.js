import  { useEffect ,useState} from "react";


function Cmp1({showText = true}) {
  const [flag , setFlag] = useState(showText); 
  useEffect(() => {
    setFlag(showText);
  },[showText])

  const showHandler = () => {
    setFlag(true)
  }
  return (
    <div>
      <button onClick={showHandler}>ShowButton</button>
      { flag && <h1>Hello</h1>}
    </div>
  );
}

export default Cmp1;
