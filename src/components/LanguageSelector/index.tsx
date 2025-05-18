import { SvgIcon } from "../../common/SvgIcon";
import { LanguageSwitch, LanguageSwitchContainer } from "./style";
import i18n from "i18next";

export const LanguageSelector = () => {
  const handleChange = (language: string) => {
    i18n.changeLanguage(language);
  };
  return (<LanguageSwitchContainer>
    <LanguageSwitch onClick={() => handleChange("en")}>
      <SvgIcon
        src="united-states.svg"
        aria-label="homepage"
        width="30px"
        height="30px"
      />
    </LanguageSwitch>
    <LanguageSwitch onClick={() => handleChange("cn")}>
      <SvgIcon
        src="china.svg"
        aria-label="homepage"
        width="30px"
        height="30px"
      />
    </LanguageSwitch>
  </LanguageSwitchContainer>);
};
