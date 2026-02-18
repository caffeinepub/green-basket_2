import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Loader2 } from 'lucide-react';
import type { UserProfile } from '../../backend';

interface ProfileFormProps {
  initialProfile?: UserProfile | null;
  onSave: (profile: UserProfile) => void;
  isSaving: boolean;
}

export default function ProfileForm({ initialProfile, onSave, isSaving }: ProfileFormProps) {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [deliveryAddress, setDeliveryAddress] = useState('');

  useEffect(() => {
    if (initialProfile) {
      setFullName(initialProfile.fullName);
      setEmail(initialProfile.email);
      setMobileNumber(initialProfile.mobileNumber);
      setDeliveryAddress(initialProfile.deliveryAddress);
    }
  }, [initialProfile]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({
      fullName,
      email,
      mobileNumber,
      deliveryAddress,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="fullName">Full Name *</Label>
        <Input
          id="fullName"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          required
          placeholder="Enter your full name"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Email Address *</Label>
        <Input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder="your.email@example.com"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="mobileNumber">Mobile Number *</Label>
        <Input
          id="mobileNumber"
          type="tel"
          value={mobileNumber}
          onChange={(e) => setMobileNumber(e.target.value)}
          required
          placeholder="+91 XXXXXXXXXX"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="deliveryAddress">Delivery Address *</Label>
        <Textarea
          id="deliveryAddress"
          value={deliveryAddress}
          onChange={(e) => setDeliveryAddress(e.target.value)}
          required
          placeholder="Enter your complete delivery address"
          rows={3}
        />
      </div>

      <Button type="submit" disabled={isSaving} className="w-full">
        {isSaving ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Saving...
          </>
        ) : (
          'Save Profile'
        )}
      </Button>
    </form>
  );
}
