import React from 'react';
import { clearDb, seed } from '../database/db';

export default function Manage() {
  const [status, setStatus] = React.useState('');

  async function reset() {
    try {
      await seed();
      setStatus('Database reset');
    } catch (error) {
      setStatus(`Failed to reset database: ${error.message}`);
    }
  }

  async function clear() {
    try {
      await clearDb();
      setStatus('Database cleared');
    } catch (error) {
      setStatus(`Failed to clear database: ${error.message}`);
    }
  }

  return (
    <div>
      <h1>Manage</h1>
      <p>{status}</p>
      <form>
        <p style={{ marginBottom: '1rem' }}>
          <button type="button" onClick={reset}>
            Reset db
          </button>
        </p>
        <p>
          <button type="button" onClick={clear}>
            Clear db
          </button>
        </p>
      </form>
    </div>
  );
}
