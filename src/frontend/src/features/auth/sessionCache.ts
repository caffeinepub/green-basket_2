import { QueryClient } from '@tanstack/react-query';

export function clearSessionCache(queryClient: QueryClient) {
  queryClient.removeQueries({ queryKey: ['currentUserProfile'] });
  queryClient.removeQueries({ queryKey: ['orderHistory'] });
  queryClient.removeQueries({ queryKey: ['activeSubscriptions'] });
  queryClient.clear();
}
