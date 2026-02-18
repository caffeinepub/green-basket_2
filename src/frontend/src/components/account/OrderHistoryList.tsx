import { useGetOrderHistory } from '../../features/orders/orderQueries';
import { Loader2, Package } from 'lucide-react';

export default function OrderHistoryList() {
  const { data: orders, isLoading } = useGetOrderHistory();

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-8">
        <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
      </div>
    );
  }

  if (!orders || orders.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-8 text-center">
        <Package className="h-12 w-12 text-muted-foreground mb-3" />
        <p className="text-muted-foreground">No orders yet</p>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {orders.map((order) => (
        <div key={order.id.toString()} className="p-4 border rounded-lg bg-card">
          <div className="flex justify-between items-start mb-2">
            <span className="font-medium">Order #{order.id.toString()}</span>
            <span className="text-sm text-muted-foreground">
              {new Date(Number(order.timestamp) / 1000000).toLocaleDateString()}
            </span>
          </div>
          <p className="text-sm text-muted-foreground whitespace-pre-wrap">{order.details}</p>
        </div>
      ))}
    </div>
  );
}
