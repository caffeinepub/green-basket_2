import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useActor } from '../../hooks/useActor';

export function useAddOrder() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (details: string) => {
      if (!actor) throw new Error('Actor not available');
      await actor.addOrder(details);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['orderHistory'] });
    },
  });
}

export function useAddSubscription() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (details: string) => {
      if (!actor) throw new Error('Actor not available');
      await actor.addSubscription(details);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['activeSubscriptions'] });
    },
  });
}
