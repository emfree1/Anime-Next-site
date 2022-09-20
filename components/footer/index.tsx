import Link from "next/link";
import {ArrowTopStyles, Content, Description, TextContainer, Title, Wrapper} from "./footer.styled";
import {Container} from "../../styles/global.styled";
import ArrowTop from "../../assets/icons/topArrow.svg";

const Footer = () => {
  return (
    <Content>
      <Container>
        <Wrapper>
          <TextContainer>
            <Title>Your name</Title>
            <Description>
              A few words about how you found Coinable and
              how did you feel about this task :)
            </Description>
          </TextContainer>
          <Link href='#'>
            <a>
              <ArrowTopStyles src={ArrowTop.src}/>
            </a>
          </Link>
        </Wrapper>
      </Container>
    </Content>
  )
}

export default Footer
