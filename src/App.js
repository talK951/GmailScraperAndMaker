import { ClientTable } from './ClientTable/ClientTable.js'
import { EmailTable } from './EmailTable/EmailTable.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ClientTable />
        <EmailTable />
      </header>
      
    </div>
  );
}

export default App;
