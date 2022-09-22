import Link from 'next/link';
import { ArrowTopStyles, Content, Description, TextContainer, Title } from './footer.styled';
import ArrowTop from '../../assets/icons/topArrow.svg';

const Footer = () => {
  return (
    <Content>
      <TextContainer>
        <Title>Your name</Title>
        <Description>
          A few words about how you found Coinable and how did you feel about this task :)
        </Description>
      </TextContainer>
      <Link href="#">
        <a>
          <ArrowTopStyles src={ArrowTop.src} />
        </a>
      </Link>
    </Content>
  );
};

export default Footer;
