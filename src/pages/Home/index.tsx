import { lazy } from "react";
import Organizer from "../../content/Organizer.json";
import MiddleBlockContent from "../../content/MiddleBlockContent.json";
import Rehearsal from "../../content/Rehearsal.json";
import Join from "../../content/Join.json";

const MiddleBlock = lazy(() => import("../../components/MiddleBlock"));
const ContactBlock = lazy(() => import("../../components/ContactBlock"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));

const Home = () => {
  return (
    <Container>
      <ScrollToTop />
      <MiddleBlock
        title={MiddleBlockContent.title}
        content={MiddleBlockContent.text}
        button={MiddleBlockContent.button}
      />
      {/* <ContentBlock
        direction="right"
        title={IntroContent.title}
        content={IntroContent.text}
        button={IntroContent.button}
        icon="developer.svg"
        id="intro"
      />
      <MiddleBlock
        title={MiddleBlockContent.title}
        content={MiddleBlockContent.text}
        button={MiddleBlockContent.button}
      />
      <ContentBlock
        direction="left"
        title={AboutContent.title}
        content={AboutContent.text}
        section={AboutContent.section}
        icon="graphs.svg"
        id="about"
      /> */}
      <ContentBlock
        direction="right"
        title={Organizer.title}
        content={Organizer.text}
        icon="mission.jpg"
        id="mission"
      />
      <ContentBlock
        direction="left"
        title={Join.title}
        content={Join.text}
        button={Join.button}
        icon="join.png"
        id="join"
      />
      <ContentBlock
        direction="right"
        title={Rehearsal.title}
        content={Rehearsal.text}
        icon="rehearsal.jpg"
        id="product"
      />
      <ContactBlock
        id="contact"
        direction="right"
      />
    </Container>
  );
};

export default Home;
