import styled from "@emotion/styled";

const Container = styled.div`
  width: 548px;
  min-height: 703px;
  background-color: #2b3949;
  border-radius: 4px;
  padding: 40px;
`;

const Text = styled.pre`
  font-size: 14px;
  color: white;
`;

interface Props {
  content: string;
}

const PreviewPanel = ({ content }: Props) => {
  return (
    <Container>
      <Text>{content}</Text>
    </Container>
  );
};

export default PreviewPanel;
