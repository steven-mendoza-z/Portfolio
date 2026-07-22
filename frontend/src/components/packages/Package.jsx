import Icon from "../atomics/Icon";
import Link from "../atomics/Link";
import Text from "../atomics/Text";
import Tags from "../ui/Tags";
import Cmd from "./Cmd";

export function Package ({
  name,
  url,
  cmd,
  iconUrl,
  description,
  tags = [],
  className = "",
  style,
  ...gridProps
}) {
  const hasTags = tags.length > 0;

  return (
        <div
          {...gridProps}
          className={`card package-card row center ${className}`.trim()}
          style={style}
        >
          <div className="package-icon-container">
            <Icon src={iconUrl} size="xl"/>
          </div>
          
          <div className="card-description gap10">
              {/* Title & Description */}
              <div className="flex row-left gap20">
                <Icon src={iconUrl} size="xl" className="package-title-icon"/>
                <Link size="sm" href={url}>{name}</Link>
              </div>
              
              <Text size="xs" color="highlight-2">{description}</Text>

              {hasTags && (
                  <Tags tags={tags}/>
              )}

              <Cmd value={cmd} />

              {/* Tags */}

          </div>
      </div>
      )}

export default Package ;
