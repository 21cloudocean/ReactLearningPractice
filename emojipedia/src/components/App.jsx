import React from "react";
import Card from "./Card";
import emojipedias from "../emojipedia";
function entry(emoji){
return <Card
key={emoji.id}
  emoji={emoji.emoji}
  term={emoji.name}
  detail={emoji.meaning}
/>
}
function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">
       {emojipedias.map(entry)}
      </dl>
    </div>
  );
}

export default App;
