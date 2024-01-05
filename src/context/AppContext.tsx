import React, { createContext, useContext, ReactNode, useState } from 'react';
import { useTranslation } from 'react-i18next';

// Define the context type
interface AppContextType {
  isSidebarActive: boolean;
  toggleSidebar: () => void;
  language: string;
  changeLang: (newLang: string) => void;
}

// Create the context with an initial value
const AppContext = createContext<AppContextType | undefined>(undefined);

// Define a provider component
interface AppProviderProps {
  children: ReactNode;
}

const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const {i18n} = useTranslation();
  const [isSidebarActive, setIsSidebarActive] = useState<boolean>(false);
  const storedLang = localStorage.getItem('lang') || 'en';
  const [language, setLanguage] = useState(storedLang);

  const toggleSidebar = () => {
    setIsSidebarActive(!isSidebarActive);
  };

  const changeLang = (newLang: string) => {
    setLanguage(newLang);
    i18n.changeLanguage(newLang);
    localStorage.setItem('lang', newLang);
  };

  const contextValue: AppContextType = {
    isSidebarActive,
    toggleSidebar,
    language,
    changeLang
  };

  return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>;
};

// Define a custom hook for using the context
const useAppContext = (): AppContextType => {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }

  return context;
};

export { AppProvider, useAppContext };
