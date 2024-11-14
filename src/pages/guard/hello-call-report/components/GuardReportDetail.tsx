import { useCompleteHelloCall } from '../hooks/useCompleteHelloCall';
import { useReport } from '../hooks/useReport';
import IconCalendar from '@/pages/assets/hello-call/calendar.svg';
import IconFile from '@/pages/assets/hello-call/file.svg';
import heartIcon from '@/pages/assets/hello-call/heart.svg';
import { Box, Text, Image, Divider, Button, Flex } from '@chakra-ui/react';

type Props = {
  helloCallId: number;
};

const GuardReportDetail = ({ helloCallId }: Props) => {
  const { reportData, isLoading, isError } = useReport(helloCallId);
  const { completeHelloCall } = useCompleteHelloCall(helloCallId);

  if (isLoading) return <Text>Loading...</Text>;
  if (isError) return <Text>Error loading report data</Text>;

  return (
    <>
      <Flex
        justifyContent='center'
        alignItems='center'
        backgroundColor='var(--color-secondary)'
        borderRadius='5px'
        padding='0.5rem'
      >
        <Text color='var(--color-primary)' fontWeight='700'>
          시니또가 작성한 보고서입니다. 잘 읽어보고 확인을 눌러주세요.
        </Text>
      </Flex>
      <Flex
        direction='column'
        width='full'
        padding={4}
        borderRadius='0.5rem'
        gap='1rem'
        backgroundColor='#e4e4e4'
        border='1px solid var(--color-gray)'
      >
        <Flex
          direction='column'
          padding='0.5rem'
          borderRadius='0.5rem'
          gap='0.5rem'
          backgroundColor='var(--color-white)'
          border='1px solid var(--color-gray)'
        >
          <Flex alignItems='center' gap='0.5rem'>
            <Image src={IconCalendar} alt='calendar-icon' />
            <Text fontSize='var(--font-size-md)' fontWeight='700'>
              서비스 수행 기간
            </Text>
          </Flex>
          <Box ml={8}>
            <Text>
              {reportData?.startDate}~{reportData?.endDate}
            </Text>
          </Box>
        </Flex>
        <Flex
          direction='column'
          padding='0.5rem'
          borderRadius='0.5rem'
          gap='0.5rem'
          backgroundColor='var(--color-white)'
          border='1px solid var(--color-gray)'
        >
          <Flex alignItems='center' gap='0.5rem'>
            <Image src={heartIcon} alt='clock-icon' />
            <Text fontSize='var(--font-size-md)' fontWeight='700'>
              이 시니또가 안부전화를 드렸어요!
            </Text>
          </Flex>
          <Flex ml={8} textAlign='center' alignItems='center'>
            {reportData?.sinittoName}
          </Flex>
        </Flex>
        <Flex
          direction='column'
          padding='0.5rem'
          borderRadius='0.5rem'
          gap='0.5rem'
          backgroundColor='var(--color-white)'
          border='1px solid var(--color-gray)'
          height='15rem'
        >
          <Flex alignItems='center' gap='0.5rem'>
            <Image src={IconFile} alt='file-icon' />
            <Text fontSize='var(--font-size-md)' fontWeight='700'>
              이런 이야기를 나누었어요.
            </Text>
          </Flex>
          <Flex ml={8} border='none' height='full'>
            {reportData?.report}
          </Flex>
        </Flex>
      </Flex>
      <Divider />
      <Button
        backgroundColor='var(--color-primary)'
        color='var(--color-white)'
        fontWeight='700'
        borderRadius='0.5rem'
        textAlign='center'
        marginBottom='10px'
        _hover={{ backgroundColor: 'var(--color-primary)' }}
        onClick={completeHelloCall}
      >
        서비스 완료 확인 및 리뷰하기
      </Button>
    </>
  );
};

export default GuardReportDetail;
