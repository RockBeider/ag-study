import React, { useState } from 'react';
import LandingPage from './pages/LandingPage';
import DesignSystemPreview from './pages/DesignSystemPreview';
import styles from './App.module.scss'; // New minimal styles for App wrapper

function App() {
  const [showDesignSystem, setShowDesignSystem] = useState(false);

  return (
    <div className={styles.appContainer}>
      {showDesignSystem ? <DesignSystemPreview /> : <LandingPage />}

      <button
        className={styles.toggleButton}
        onClick={() => setShowDesignSystem(!showDesignSystem)}
      >
        {showDesignSystem ? 'Back to Website' : 'View Design System'}
      </button>
    </div>
  );
}

export default App;
