import { Col } from "antd";
import { Fade } from "react-awesome-reveal";
import { withTranslation } from "react-i18next";

import { ContactBlockProps } from "./types";
import {
  ContentSection,
  Content,
  ContentWrapper,
  StyledRow,
} from "./styles";

const ContactBlock = ({
  t,
  id,
  direction,
}: ContactBlockProps
) => {


  return (
    <ContentSection>
      <Fade direction={direction} triggerOnce>
        <StyledRow
          justify="space-between"
          align="middle"
          id={id}
        >
          <Col lg={11} md={11} sm={11} xs={24}>
            <ContentWrapper>
              <h6>{t('Contact')}</h6>
              <Content>{t('Please email')} <a href="mailto:orchestra@chineseutah.org">orchestra@chineseutah.org</a> {t('or call (801) 232-0571 for performance or audition inquiries.')}</Content>

            </ContentWrapper>
          </Col>
        </StyledRow>
      </Fade>
    </ContentSection>
  );
};

export default withTranslation()(ContactBlock);
