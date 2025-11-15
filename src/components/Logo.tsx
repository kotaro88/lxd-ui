import type { FC } from "react";
import { useCurrentProject } from "context/useCurrentProject";
import { NavLink } from "react-router-dom";
import { useSettings } from "context/useSettings";
import classNames from "classnames";
import { hasMicroCloudFlag } from "util/settings";

interface Props {
  light?: boolean;
}

const Logo: FC<Props> = ({ light }) => {
  const { project, isLoading } = useCurrentProject();
  const { data: settings } = useSettings();
  const isMicroCloud = hasMicroCloudFlag(settings);

  const src = isMicroCloud
    ? "/ui/assets/img/logo.png"
    : "/ui/assets/img/logo.png";
  const heading = "TreCloud";

  const getLogoLink = () => {
    if (isLoading || !project) {
      return "/ui/";
    }
    return `/ui/project/${encodeURIComponent(project.name)}`;
  };

  return (
    <NavLink className="p-panel__logo" to={getLogoLink()}>
      <img src={src} alt="TreCloud logo" className="p-panel__logo-image" />
      <div
        className={classNames("logo-text p-heading--4", { "is-light": light })}
      >
        {heading}
      </div>
    </NavLink>
  );
};

export default Logo;
