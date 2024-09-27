import styled from '@emotion/styled';

// 시니또 서약서 내용
export const TosSiniddo = () => {
  return (
    <Wrapper>
      본인은 [나만의 작은 시니또]의 시니어 지원자 매칭 서비스를 이용함에 있어,
      다음과 같은 사항을 충분히 이해하고 동의합니다.
      <Paragraph>
        <Title>1. 서비스 제공의 책임</Title>
        <Content>
          본인은 조부모님을 위한 시니어 지원자로서, 서비스 요청을 성실하게
          수행할 책임이 있습니다. 서비스 수행 중에는 조부모님의 안전과 편의를
          최우선으로 고려하며, 정직하고 신뢰할 수 있는 시니어 지원자로 활동할
          것을 서약합니다.
        </Content>
      </Paragraph>
      <Paragraph>
        <Title>2. 결제 관련 한계</Title>
        <Content>
          본인은 서비스 요청에 따라 택시 호출 등 결제가 필요한 서비스를 대신
          예약할 수 있습니다. 그러나 결제는 전적으로 조부모님 또는 보호자가 직접
          처리해야 하며, 본인은 어떠한 경우에도 결제에 관여하거나 대금을 대신
          지불하지 않음을 이해하고 동의합니다.
        </Content>
        <Content>
          또한, 결제가 이루어지지 않거나 기타 문제로 인해 발생하는 법적, 재정적
          책임은 보호자에게 있으며, 본인은 이에 대해 어떠한 책임도 지지
          않습니다.
        </Content>
      </Paragraph>
      <Paragraph>
        <Title>3. 개인정보 보호</Title>
        <Content>
          본인은 시니어 지원 활동 중 접하게 되는 조부모님 및 보호자의 개인정보를
          철저히 보호할 의무가 있습니다. 해당 정보를 타인에게 공개하거나
          부적절하게 사용하는 경우, 이에 따른 법적 책임을 질 수 있음을 인지하고
          있습니다.
        </Content>
      </Paragraph>
      <Paragraph>
        <Title>4. 지원 활동의 윤리</Title>
        <Content>
          본인은 시니어 지원자로서의 직무를 수행함에 있어, 모든 활동이 법적 및
          윤리적 기준에 부합하도록 할 것을 서약합니다. 조부모님과의 상호작용에서
          존중과 예의를 갖추며, 부적절한 언행이나 행동을 하지 않을 것입니다.
        </Content>
      </Paragraph>
      <Paragraph>
        <Title>5. 서비스 이용 규정 준수</Title>
        <Content>
          본인은 [나만의 작은 시니또]가 제공하는 서비스 이용 규정을 준수하며,
          서비스 제공 과정에서 발생할 수 있는 문제를 [나만의 작은 시니또]와
          적극적으로 협력하여 해결할 것입니다.
        </Content>
        <Content>
          만약 규정을 위반하거나, 시니어 지원자로서의 의무를 소홀히 하는 경우,
          [나만의 작은 시니또]는 본인의 시니어 지원자 자격을 박탈할 수 있으며,
          이에 대해 이의를 제기하지 않을 것에 동의합니다.
        </Content>
      </Paragraph>
      <Paragraph>
        <Title>6. 서약 위반 시 책임</Title>
        <Content>
          본 서약서의 내용을 위반하는 경우, [나만의 작은 시니또]는 법적 조치를
          취할 수 있으며, 이에 대한 모든 법적 책임을 본인이 부담함을 서약합니다.
        </Content>
      </Paragraph>
      <Paragraph>
        <Title>7. 법적 효력</Title>
        <Content>
          본 서약서는 법적 효력을 가지며, 본인은 이를 충분히 이해하고 동의한 후
          시니어 지원자로서 활동할 것입니다. 이 서약서에 동의하지 않을 경우,
          시니어 지원자 활동이 불가능함을 인지하고 있습니다.
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
