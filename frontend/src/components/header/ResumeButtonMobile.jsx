import Icon from "../atomics/Icon";
import Text from "../atomics/Text";

export function ResumeButtonMobile() {
  return (
    <div className="download-cv">
      <a href="resume.pdf" target="_blank" rel="noopener noreferrer">
        <div className='row gap10'>
          <Text size="xxs">Resume</Text>
          <Icon src="icons/redirect.svg" alt="Open resume in new tab" size="sm" />
        </div>
      </a>
    </div>
  );
}

export default ResumeButtonMobile;
