import React, { useState } from 'react';
import './App.css';
import { TableFlowImporter } from '@tableflow/react';

export default function App() {

    const [isOpen, setIsOpen] = useState(false);

    return (
      <>
        <button className="buttonStyle" onClick={() => setIsOpen(true)}>Open TableFlow Importer</button>
  
        <TableFlowImporter
          importerId={"b023c8c8-101d-40c7-b279-bd4a131da516"} // Use your importer ID
          modalIsOpen={isOpen}
          modalOnCloseTriggered={() => setIsOpen(false)}
          primaryColor="#246A24"
          metadata={{"user_id": 1234}}
          onComplete={(data) => console.log(data)}
        />
      </>
    );

}
