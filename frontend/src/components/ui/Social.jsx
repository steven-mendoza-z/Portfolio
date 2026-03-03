export function Social({img, alt, url}) {
  return (
    <a className="social-container" href={url} target="_blank" rel="noopener noreferrer">
        <img src={`socials/${img}`} alt={alt} />
    </a>
    
  );
}
export default Social;

