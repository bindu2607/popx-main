import React, { useState } from 'react';
import WelcomeScreen from './components/WelcomeScreen';
import SigninScreen from './components/SigninScreen';
import SignupScreen from './components/SignupScreen';
import ProfileScreen from './components/ProfileScreen';

function App() {
  const [currentScreen, setCurrentScreen] = useState('welcome');
  const [user, setUser] = useState(null);

  const handleLogin = (email) => {
    // If logging in as Marry Doe or another user, default to exact details from the screenshot
    const isMarry = email.toLowerCase() === 'marry@gmail.com';
    setUser({
      fullName: isMarry ? 'Marry Doe' : email.split('@')[0].split('.').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' '),
      email: isMarry ? 'Marry@Gmail.Com' : email,
    });
    setCurrentScreen('profile');
  };

  const handleRegister = (registeredUser) => {
    setUser(registeredUser);
    setCurrentScreen('profile');
  };

  const handleLogout = () => {
    setUser(null);
    setCurrentScreen('welcome');
  };

  const handleBack = () => {
    setCurrentScreen('welcome');
  };

  return (
    <div className="w-screen h-screen bg-[#ECEEF2] flex items-center justify-center font-sans overflow-hidden">
      {/* Centered Mobile Device Viewport Card */}
      <div className="w-full max-w-[375px] h-[680px] bg-white rounded-[24px] shadow-2xl flex flex-col overflow-hidden border border-[#ECEAEB] relative">
        {currentScreen === 'welcome' && (
          <WelcomeScreen
            onCreateAccount={() => setCurrentScreen('signup')}
            onLogin={() => setCurrentScreen('signin')}
          />
        )}

        {currentScreen === 'signin' && (
          <SigninScreen
            onLogin={handleLogin}
            onBack={handleBack}
          />
        )}

        {currentScreen === 'signup' && (
          <SignupScreen
            onRegister={handleRegister}
            onBack={handleBack}
          />
        )}

        {currentScreen === 'profile' && (
          <ProfileScreen
            user={user}
            onLogout={handleLogout}
          />
        )}
      </div>
    </div>
  );
}

export default App;
