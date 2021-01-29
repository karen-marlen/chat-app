import { ChatEngine } from 'react-chat-engine';

import ChatFeed from './components/ChatFeed';

import './App.css';

const App = () => {
    return (
        <ChatEngine 
            height="100vh"
            projectID="ffca04a4-6104-4245-bc0f-ea552682e7d1"
            userName="karen-marlen"
            userSecret="12345678"
            renderChatFeed={( chatAppProps ) => <ChatFeed { ...chatAppProps } /> }
        />
    );
}

export default App;