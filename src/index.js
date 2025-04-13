import React, { createContext, useState } from 'react';
// import ReactDOM from 'react-dom';
import ReactDOM from 'react-dom/client';
import { ToastContainer } from 'react-toastify';
import App from './App';
import Spinner from './Spinner';
import reportWebVitals from './reportWebVitals';
import "./index.css"
import RenderModal from "./render-model/RenderModal";
import firebase from "firebase/compat/app"
import  {QueryClientProvider , QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const firebaseConfig = {
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
};
firebase.initializeApp(firebaseConfig);
const EnableSpinner = createContext();
const ActiveModal = createContext();

const Root = () => {
  const [spinner, setSpinnerState] = useState(false);
  const [activeModalState, setActiveModalState] = useState(false);
  const queryClient = new QueryClient();

  return (
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <ActiveModal.Provider value={[activeModalState, setActiveModalState]}>
          <EnableSpinner.Provider value={[setSpinnerState, spinner]}>
            <RenderModal />
            <div className="spinner">
              {spinner && <Spinner />}
              <App />
            </div>
          </EnableSpinner.Provider>
        </ActiveModal.Provider>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </React.StrictMode>
  );
};

const rootElement = document.getElementById('root');
ReactDOM.createRoot(rootElement).render(<Root />);

reportWebVitals();
export { EnableSpinner , ActiveModal };
