import { useSupportedFeatures } from "./useSupportedFeatures";

export const useDocs = (): string => {
  const remoteBase = "https://doc.trecloud.vn";
  const localBase = "https://doc.trecloud.vn";

  const { hasLocalDocumentation } = useSupportedFeatures();

  if (!hasLocalDocumentation) {
    return remoteBase;
  }

  return localBase;
};
