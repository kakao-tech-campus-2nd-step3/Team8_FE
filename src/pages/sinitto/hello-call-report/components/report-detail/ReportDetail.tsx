import {
  useReportContents,
  useReportSubmit,
  useServicePeriod,
  useServiceTimes,
} from '../../hooks';
import IconCalendar from '@/pages/assets/shared/hello-call/calendar.svg';
import IconClock from '@/pages/assets/shared/hello-call/clock.svg';
import IconFile from '@/pages/assets/shared/hello-call/file.svg';
import { useGetServiceDetail } from '@/pages/sinitto/hello-call-service/hooks';
import { BasicButton } from '@/shared';
import { Box, Divider, Image, Text, Textarea, Flex } from '@chakra-ui/react';
import styled from '@emotion/styled';

const ReportDetail = () => {
  const helloCallId = localStorage.getItem('helloCallId');
  const { data: getServiceDetail } = useGetServiceDetail(Number(helloCallId));

  const { reportContents, changeContents } = useReportContents();

  const { handlerSubmit } = useReportSubmit(reportContents);

  const { formattedStartDate, formattedEndDate } = useServicePeriod(
    getServiceDetail?.startDate,
    getServiceDetail?.endDate
  );

  const { timeSlots, serviceTime } = useServiceTimes(
    getServiceDetail?.timeSlots,
    getServiceDetail?.serviceTime
  );

  return (
    <>
      <Box
        display='flex'
        p='var(--space-sm)'
        flexDir='column'
        borderRadius='5px'
        gap='var(--space-sm)'
        backgroundColor='var(--color-white-gray)'
        w='full'
      >
        <InfoBox>
          <Flex flexDir='row' alignItems='center' gap='var(--space-xs)'>
            <Image src={IconCalendar} alt='calendar-icon' />
            <Text fontSize='var(--font-size-lg)' fontWeight='700'>
              서비스 수행 기간
            </Text>
          </Flex>
          <Box ml={8}>
            <Text>
              {formattedStartDate} ~ {formattedEndDate}
            </Text>
          </Box>
        </InfoBox>

        <InfoBox>
          <Flex flexDir='row' alignItems='center' gap='var(--space-xs)'>
            <Image src={IconClock} alt='clock-icon' />
            <Text fontSize='var(--font-size-lg)' fontWeight='700'>
              서비스 수행 시간대
            </Text>
          </Flex>
          {timeSlots?.map((time, index) => (
            <Box
              key={index}
              display='flex'
              gap='var(--space-xs)'
              ml={8}
              textAlign='center'
              alignItems='center'
            >
              <Text>{time.dayName}요일</Text>
              <Text width='105px'>
                {String(time.startTime)} ~ {String(time.endTime)}
              </Text>
              <Box
                backgroundColor='var(--color-primary)'
                px={1}
                borderRadius={5}
              >
                <Text color='var(--color-white)'>{serviceTime} 분</Text>
              </Box>
            </Box>
          ))}
        </InfoBox>

        <InfoBox h='15rem'>
          <TitleBox>
            <Image src={IconFile} alt='file-icon' />
            <Text fontSize='var(--font-size-lg)' fontWeight='700'>
              어떤 이야기를 나누었나요?
            </Text>
          </TitleBox>
          <Textarea
            border='none'
            resize='none'
            height='full'
            onChange={changeContents}
          />
        </InfoBox>
      </Box>
      <Divider />
      <BasicButton onClick={() => handlerSubmit(Number(helloCallId))}>
        보고서 제출하기
      </BasicButton>
    </>
  );
};

export default ReportDetail;

const InfoBox = styled(Box)`
  display: flex;
  flex-direction: column;
  padding: var(--space-sm);
  border-radius: 5px;
  gap: var(--space-xs);
  background-color: var(--color-white);
`;

const TitleBox = styled(Box)`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
`;
