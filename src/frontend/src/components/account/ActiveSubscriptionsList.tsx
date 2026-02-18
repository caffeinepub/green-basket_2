import { useGetActiveSubscriptions } from '../../features/orders/orderQueries';
import { Loader2, Calendar } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export default function ActiveSubscriptionsList() {
  const { data: subscriptions, isLoading } = useGetActiveSubscriptions();

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-8">
        <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
      </div>
    );
  }

  if (!subscriptions || subscriptions.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-8 text-center">
        <Calendar className="h-12 w-12 text-muted-foreground mb-3" />
        <p className="text-muted-foreground">No active subscriptions</p>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {subscriptions.map((subscription) => (
        <div key={subscription.id.toString()} className="p-4 border rounded-lg bg-card">
          <div className="flex justify-between items-start mb-2">
            <span className="font-medium">Subscription #{subscription.id.toString()}</span>
            <Badge variant={subscription.status === 'active' ? 'default' : 'secondary'}>
              {subscription.status}
            </Badge>
          </div>
          <p className="text-sm text-muted-foreground whitespace-pre-wrap">{subscription.details}</p>
        </div>
      ))}
    </div>
  );
}
