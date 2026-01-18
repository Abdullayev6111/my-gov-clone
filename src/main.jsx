import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';
import './index.css';
import './i18n';
import { MantineProvider } from '@mantine/core';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <MantineProvider>
      <App />
    </MantineProvider>
  </BrowserRouter>,
);
