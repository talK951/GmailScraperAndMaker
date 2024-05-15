import { ClientTable } from './ClientTable/ClientTable.js';
import { EmailTable } from './EmailTable/EmailTable.js';
import { EmailGenerator } from './EmailGenerator/EmailGenerator.js';
import { Client } from './Utils/Client.js';
import { useState } from "react";

function App() {

  const [clientsList, setClientList] = useState([ 
    new Client(1, "a", "a@gmail.com", "a"),
    new Client(2, "b", "b@gmail.com", "b"),
    new Client(3, "c", "c@gmail.com", "c"),
    new Client(4, "d", "d@gmail.com", "d"),
  ]);

  const [emailsGenerated, setEmailsGenerated] = useState([]);

  return (
    <div className="App">
      <header className="App-header">
        <ClientTable clientsList={ clientsList } setClientList={setClientList}/>
        <EmailGenerator clientsList={ clientsList } setEmailsGenerated={setEmailsGenerated}/>
        <EmailTable emailsList={emailsGenerated} setEmailsList={setEmailsGenerated}/>
      </header>
    </div>
  );
}

export default App;
