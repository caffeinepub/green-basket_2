import { useQuery } from '@tanstack/react-query';
import { useActor } from '../../hooks/useActor';
import type { Order, Subscription } from '../../backend';

export function useGetOrderHistory() {
  const { actor, isFetching: actorFetching } = useActor();

  return useQuery<Order[]>({
    queryKey: ['orderHistory'],
    queryFn: async () => {
      if (!actor) throw new Error('Actor not available');
      return actor.getOrderHistory();
    },
    enabled: !!actor && !actorFetching,
  });
}

export function useGetActiveSubscriptions() {
  const { actor, isFetching: actorFetching } = useActor();

  return useQuery<Subscription[]>({
    queryKey: ['activeSubscriptions'],
    queryFn: async () => {
      if (!actor) throw new Error('Actor not available');
      return actor.getActiveSubscriptions();
    },
    enabled: !!actor && !actorFetching,
  });
}
