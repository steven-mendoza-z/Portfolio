export function Tech({ tech, size = 30, showName = false, showDetails = false }) {
  const tooltip = (showDetails && tech.tooltip) ? tech.tooltip : tech.name 
  
  return (
    <div
      className="tech tooltip"
      aria-label={tooltip}
      data-tooltip={tooltip}
    >
      <img
        src={tech.img}
        alt={tech.name}
        width={size}
        height={size}
      />
      { showName &&
        <p className="t-body6">{tech.name}</p>
      }
    </div>
  );
}

export default Tech;
