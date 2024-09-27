import styled from '@emotion/styled';

// 보호자 서약서 내용
export const TosGuard = () => {
  return (
    <Wrapper>
      본인은 [나만의 작은 시니또]의 시니어 마니또 매칭 서비스를 이용함에 있어,
      다음과 같은 사항을 충분히 이해하고 동의합니다.
      <Paragraph>
        <Title>1. 결제 책임의 한계</Title>
        <Content>
          본 서비스의 시니어를 위한 마니또(이하 ‘시니어 케어 제공자’)는
          조부모님의 요청에 따라 택시 호출 및 기타 유사한 서비스를 대신 예약할
          수 있습니다. 그러나 모든 예약에 따른 결제 책임은 전적으로 조부모님
          또는 보호자에게 있으며, 시니어 케어 제공자는 결제에 관여하지 않습니다.
        </Content>
        <Content>
          이에 따라, 조부모님이 결제를 하지 못하는 상황이 발생할 경우, 해당
          금액에 대한 모든 책임은 보호자에게 있으며, [나만의 작은 시니또] 및
          시니어 케어 제공자는 이에 대한 법적, 재정적 책임을 지지 않습니다.
        </Content>
      </Paragraph>
      <Paragraph>
        <Title>2. 개인정보 제공 및 관리</Title>
        <Content>
          보호자는 본 서비스를 이용하기 위해 조부모님의 개인정보를 제공해야
          하며, 해당 정보는 조부모님의 서비스 이용을 위한 목적으로만 사용됩니다.
        </Content>
        <Content>
          보호자는 제공한 개인정보가 정확하고 최신 상태임을 보장해야 하며, 이를
          통해 발생하는 모든 문제에 대한 책임을 집니다. 또한 보호자는 필요 시
          개인정보 변경을 즉시 [나만의 작은 시니또]에 통보해야 합니다.
        </Content>
      </Paragraph>
      <Paragraph>
        <Title>3. 서비스 이용의 책임</Title>
        <Content>
          특히, 보호자는 조부모님의 재정 상태를 충분히 확인한 후 서비스 이용을
          권장해야 하며, 만약 이로 인해 발생하는 재정적 손실에 대해 [나만의 작은
          시니또]에 어떠한 법적 책임도 묻지 않을 것임을 서약합니다.
        </Content>
      </Paragraph>
      <Paragraph>
        <Title>4. 서약 위반 시 책임</Title>
        <Content>
          본 서약서의 내용 중 하나라도 위반될 경우, [나만의 작은 시니또]는
          서비스를 일시 중단하거나 제한할 수 있으며, 이에 대해 보호자는 이의를
          제기하지 않을 것에 동의합니다.
        </Content>
      </Paragraph>
      <Paragraph>
        <Title>5. 법적 효력</Title>
        <Content>
          본 서약서는 법적 효력을 가지며, 보호자는 이를 충분히 이해하고 동의한
          후 서비스를 이용합니다. 이 서약서에 동의하지 않을 경우, 서비스 이용이
          불가능함을 인지하고 있습니다.
        </Content>
      </Paragraph>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
`;

const Paragraph = styled.div`
  margin-top: 10px;
`;

const Title = styled.h3`
  font-size: 16px;
  font-weight: 600;
`;

const Content = styled.p`
  padding-left: 15px;
  margin-bottom: 7px;
`;
