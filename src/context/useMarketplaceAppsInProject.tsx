import { useQuery } from "@tanstack/react-query";
import { useAuth } from "./auth";

export default function useMarketplaceAppsInProject(
  project: string,
  enabled?: boolean,
) {
  const { isFineGrained } = useAuth();
  return useQuery({
    queryKey: [],
    queryFn: 
  });
}
