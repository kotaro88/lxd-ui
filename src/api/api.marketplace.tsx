import axios from "axios";

const marketplaceAxios = axios.create({
  baseURL: "/",
});

export function fetchMarketplaceAppsInProject(project: string) {}
