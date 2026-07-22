import Icon from "../atomics/Icon";
import Text from "../atomics/Text";

export function Tech({ tech, size = "lg", showName = false, showDetails = false }) {
  const tooltip = (showDetails && tech.tooltip) ? tech.tooltip : tech.name 
  
  return (
    <div className="tech tooltip" aria-label={tooltip} data-tooltip={tooltip}>
      <Icon src={tech.img} alt={tech.name} size={size}/>
      { showName &&
        <Text size="xxs" semibold>{tech.name}</Text>
      }
    </div>
  );
}

export default Tech;
