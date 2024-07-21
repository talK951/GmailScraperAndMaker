import { ClientTable } from './ClientTable/ClientTable.js';
import { AddClientBox } from './AddClientBox/AddClientBox.js';
import { EmailTable } from './EmailTable/EmailTable.js';
import { EmailGenerator } from './EmailGenerator/EmailGenerator.js';
import { Client } from './Utils/Client.js';
import { useState } from "react";
import { FrontPage } from './FrontPage/FrontPage.js';

function App() {

  const [clientsList, setClientList] = useState([ 
    new Client(1, "a", "a@gmail.com", "a", "https://toscrape.com/"),
    new Client(2, "b", "b@gmail.com", "b", "https://toscrape.com/"),
    new Client(3, "c", "c@gmail.com", "c", "https://toscrape.com/"),
    new Client(4, "d", "d@gmail.com", "d", "https://toscrape.com/"),
  ]);

  const [emailsGenerated, setEmailsGenerated] = useState([]);

  return (
    <div className="App">
      <header className="App-header">
        <FrontPage/>
        <ClientTable clientsList={ clientsList } setClientList={setClientList}/>
        <AddClientBox clientsList={ clientsList } setClientList={setClientList}/>
        <EmailGenerator clientsList={ clientsList } setEmailsGenerated={setEmailsGenerated}/>
        <EmailTable emailsList={emailsGenerated} setEmailsList={setEmailsGenerated}/>
      </header>
    </div>
  );
}

export default App;
