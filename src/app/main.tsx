import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';

import './index.sass';
import { RouterProvider } from 'react-router-dom';
import { router } from './router';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
