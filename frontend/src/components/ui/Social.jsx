import Icon from "../atomics/Icon";

export function Social({img, alt, url}) {
  return (
    <a className="social-container" href={url} target="_blank" rel="noopener noreferrer">
        <Icon src={`socials/${img}`} alt={alt} size="xl" />
    </a>
    
  );
}
export default Social;

