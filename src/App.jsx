import {useState} from "react";
import './App.css'
const emoji=[
  {id:1,symbol:"🙋",name:'happy person'},
  {id:2,symbol:"😞", name:"disappoinment"},
  {id:3,symbol:"😑",name:'expressionless'},
  {id:4,symbol:"🥳",name:"excited"}
]


function App() {
  const[search,searchEmoji]=useState("");
  const handleChange=(e)=>{
      searchEmoji(e.target.value)
  }

  const data =emoji.filter((emojiData)=>{
    const box=emojiData.names.toLowerCase();
    return box.includes(search.toLowerCase());
  })
  return(
    <div>
      <h2>Emoji Searcher</h2>
      <input
       type="text"
       placeholder="search here"
        value={search}
        onChange={handleChange}
        />
        <div>{data.map((emoji)=>emoji.symbol)}</div>
    </div>
    
  )
}
 export default App