import { createContext, ReactNode, useCallback, useState } from 'react';
import { useInternetIdentity } from '../../hooks/useInternetIdentity';
import LoginRequiredDialog from '../../components/auth/LoginRequiredDialog';

interface AuthGateContextValue {
  isAuthenticated: boolean;
  requireAuth: (action: () => void) => void;
}

export const AuthGateContext = createContext<AuthGateContextValue | undefined>(undefined);

export function AuthGateProvider({ children }: { children: ReactNode }) {
  const { identity } = useInternetIdentity();
  const [showLoginRequired, setShowLoginRequired] = useState(false);
  const [pendingAction, setPendingAction] = useState<(() => void) | null>(null);

  const isAuthenticated = !!identity;

  const requireAuth = useCallback((action: () => void) => {
    if (isAuthenticated) {
      action();
    } else {
      setPendingAction(() => action);
      setShowLoginRequired(true);
    }
  }, [isAuthenticated]);

  const handleLoginSuccess = useCallback(() => {
    setShowLoginRequired(false);
    if (pendingAction) {
      setTimeout(() => {
        pendingAction();
        setPendingAction(null);
      }, 100);
    }
  }, [pendingAction]);

  const handleClose = useCallback(() => {
    setShowLoginRequired(false);
    setPendingAction(null);
  }, []);

  return (
    <AuthGateContext.Provider value={{ isAuthenticated, requireAuth }}>
      {children}
      <LoginRequiredDialog 
        open={showLoginRequired} 
        onClose={handleClose}
        onLoginSuccess={handleLoginSuccess}
      />
    </AuthGateContext.Provider>
  );
}
