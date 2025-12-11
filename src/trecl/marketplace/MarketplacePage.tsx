import { useNotify } from "@canonical/react-components";
import { useDocs } from "context/useDocs";
import { useParams } from "react-router-dom";

export default function MarketplacePage() {
  const docBaseLink = useDocs();
  const notify = useNotify();
  const { project } = useParams<{ project: string }>();

  if (!project) {
    return <>Missing project</>;
  }
  return <div>MarketplacePage</div>;
}
