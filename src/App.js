import { ChatEngine } from 'react-chat-engine';

import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';

import './App.css';

const projectID = 'ffca04a4-6104-4245-bc0f-ea552682e7d1';

const App = () => {
    if (!localStorage.getItem('username')) return <LoginForm />;

    return (
        <ChatEngine 
            height="100vh"
            projectID={ projectID }
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            renderChatFeed={( chatAppProps ) => <ChatFeed { ...chatAppProps } /> }
            onNewMessage={() => Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
        />
    );
};

export default App;