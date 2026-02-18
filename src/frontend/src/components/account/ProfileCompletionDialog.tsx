import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import ProfileForm from './ProfileForm';
import { useSaveCallerUserProfile } from '../../features/profile/profileQueries';
import type { UserProfile } from '../../backend';

interface ProfileCompletionDialogProps {
  open: boolean;
  onComplete: () => void;
}

export default function ProfileCompletionDialog({ open, onComplete }: ProfileCompletionDialogProps) {
  const saveProfile = useSaveCallerUserProfile();

  const handleSave = async (profile: UserProfile) => {
    try {
      await saveProfile.mutateAsync(profile);
      onComplete();
    } catch (error) {
      console.error('Failed to save profile:', error);
    }
  };

  return (
    <Dialog open={open} onOpenChange={() => {}}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Complete Your Profile</DialogTitle>
          <DialogDescription>
            Please provide your details to proceed with checkout.
          </DialogDescription>
        </DialogHeader>
        <ProfileForm 
          onSave={handleSave} 
          isSaving={saveProfile.isPending}
        />
      </DialogContent>
    </Dialog>
  );
}
