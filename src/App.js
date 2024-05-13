import { ClientTable } from './ClientTable/ClientTable.js';
import { EmailTable } from './EmailTable/EmailTable.js';
import { EmailGenerator } from './EmailGenerator/EmailGenerator.js';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <ClientTable/>
        <EmailGenerator clientsList={ [] }/>
        <EmailTable />
      </header>
    </div>
  );
}

export default App;
