import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { useQueryClient } from '@tanstack/react-query';
import { useInternetIdentity } from '../../hooks/useInternetIdentity';
import { useGetCallerUserProfile, useSaveCallerUserProfile } from '../../features/profile/profileQueries';
import { clearSessionCache } from '../../features/auth/sessionCache';
import ProfileForm from './ProfileForm';
import OrderHistoryList from './OrderHistoryList';
import ActiveSubscriptionsList from './ActiveSubscriptionsList';
import { Loader2 } from 'lucide-react';

interface AccountSheetProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function AccountSheet({ open, onOpenChange }: AccountSheetProps) {
  const { clear } = useInternetIdentity();
  const queryClient = useQueryClient();
  const { data: userProfile, isLoading: profileLoading } = useGetCallerUserProfile();
  const saveProfile = useSaveCallerUserProfile();

  const handleLogout = async () => {
    await clear();
    clearSessionCache(queryClient);
    onOpenChange(false);
  };

  const handleSaveProfile = async (profile: any) => {
    try {
      await saveProfile.mutateAsync(profile);
    } catch (error) {
      console.error('Failed to save profile:', error);
    }
  };

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="w-full sm:max-w-lg overflow-y-auto">
        <SheetHeader>
          <SheetTitle>My Account</SheetTitle>
        </SheetHeader>

        <Tabs defaultValue="profile" className="mt-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="profile">Profile</TabsTrigger>
            <TabsTrigger value="orders">Orders</TabsTrigger>
            <TabsTrigger value="subscriptions">Subscriptions</TabsTrigger>
          </TabsList>

          <TabsContent value="profile" className="space-y-4 mt-4">
            {profileLoading ? (
              <div className="flex items-center justify-center py-8">
                <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
              </div>
            ) : (
              <ProfileForm 
                initialProfile={userProfile}
                onSave={handleSaveProfile}
                isSaving={saveProfile.isPending}
              />
            )}
          </TabsContent>

          <TabsContent value="orders" className="mt-4">
            <OrderHistoryList />
          </TabsContent>

          <TabsContent value="subscriptions" className="mt-4">
            <ActiveSubscriptionsList />
          </TabsContent>
        </Tabs>

        <div className="mt-6 pt-6 border-t">
          <Button 
            variant="outline" 
            className="w-full"
            onClick={handleLogout}
          >
            Logout
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}
