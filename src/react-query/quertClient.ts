import { QueryClient } from "react-query";

function queryErrorHandler(error: unknown): void {
  const errorMessage = error instanceof Error && error.message;
  alert(errorMessage);
}

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      onError: queryErrorHandler,
      staleTime: 600000,
      cacheTime: 900000,
      refetchOnMount: false,
      refetchOnReconnect: false,
      refetchOnWindowFocus: false,
    },
  },
});
