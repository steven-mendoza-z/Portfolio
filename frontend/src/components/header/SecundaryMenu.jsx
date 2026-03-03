import Reveal from "../anims/Reveal";
import ResumeButtonMobile from "./ResumeButtonMobile";
import ResumeButtonDesktop from "./ResumeButtonDesktop";
import { ThemeSwitch } from "./ThemeSwitch";

export function SecundaryMenu() {    
    const isMobile = window.matchMedia("(max-width: 768px)").matches;

    return (
        <Reveal className="header-card row gap10">
            {isMobile && <ResumeButtonMobile/>}
            {!isMobile && <ResumeButtonDesktop/>}
            <ThemeSwitch />
        </Reveal>
    );
}

export default SecundaryMenu