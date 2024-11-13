import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import type { Swiper as SwiperType } from 'swiper';

import ManualDetail from '../components/ManualDetail';
import { HEADER_HEIGHT } from '@/shared';
import { Button, Flex } from '@chakra-ui/react';
import styled from '@emotion/styled';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const ServiceManualPage = () => {
  const navigate = useNavigate();
  const [page, setPage] = useState(0);
  const [swiper, setSwiper] = useState<SwiperType | null>(null);
  const totalSlides = 6;

  const handleSlideChange = (swiper: SwiperType) => {
    setPage(swiper.activeIndex);
  };

  const handlePrevClick = () => {
    swiper?.slidePrev();
  };

  const handleNextClick = () => {
    swiper?.slideNext();
  };

  const handleStartService = () => {
    navigate(-1);
  };

  return (
    <ManualPageLayout page={page}>
      <ContentWrapper>
        <StyledSwiper
          slidesPerView={1}
          pagination={{
            clickable: true,
            el: '.custom-pagination',
            bulletClass: 'custom-bullet',
            bulletActiveClass: 'custom-bullet-active',
          }}
          modules={[Pagination]}
          onSlideChange={handleSlideChange}
          onSwiper={setSwiper}
        >
          <SwiperSlide>
            <ManualDetail
              title='보호자 홈페이지의 기능을 보여드릴게요'
              description='기능을 사용하기 위해서는 마이페이지의 내 시니어 관리를 통해 시니어를 등록해야해요!'
              imageSrc='/image/service-manual1.png'
            />
          </SwiperSlide>
          <SwiperSlide>
            <ManualDetail
              title='가이드라인을 만들어보세요'
              description='시니어를 등록했다면 시니어마다 가이드라인을 등록해보세요! 시니또들이 빠르게 도움을 줄 수 있습니다. '
              imageSrc='/image/service-manual2.png'
            />
          </SwiperSlide>
          <SwiperSlide>
            <ManualDetail
              title='서비스를 이용하려면 포인트가 필요해요'
              description='포인트를 충전 요청하고 카카오톡 나에게 보내기 메세지를 확인해 충전 요청을 확인하세요.'
              imageSrc='/image/service-manual3.png'
            />
          </SwiperSlide>
          <SwiperSlide>
            <ManualDetail
              title='시니어에게 서비스 번호를 알려주세요'
              description='시니어가 서비스 번호로 전화를 걸면 자동으로 도움 요청이 완료되고 서비스 이용 내역 페이지에 나타나요!'
              imageSrc='/image/service-manual4.png'
            />
          </SwiperSlide>
          <SwiperSlide>
            <ManualDetail
              title='시니어의 서비스를 확인하세요'
              description='서비스를 확인하고 완료 처리해주세요. 안부전화의 경우 시니또가 작성한 보고서를 볼 수 있습니다!'
              imageSrc='/image/service-manual5.png'
            />
          </SwiperSlide>
          <SwiperSlide>
            <StartMessage>그럼 서비스를 이용하러 가볼까요?</StartMessage>
          </SwiperSlide>
        </StyledSwiper>
        <PaginationWrapper className='custom-pagination' />
        {page === totalSlides - 1 ? (
          <StartButton onClick={handleStartService}>
            서비스 시작하기
          </StartButton>
        ) : (
          <NavigationButtons>
            <NavButton onClick={handlePrevClick} disabled={page === 0}>
              이전
            </NavButton>
            <NavButton
              onClick={handleNextClick}
              disabled={page === totalSlides - 1}
            >
              다음
            </NavButton>
          </NavigationButtons>
        )}
      </ContentWrapper>
    </ManualPageLayout>
  );
};

export default ServiceManualPage;

const ManualPageLayout = styled.div<{ page: number }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  width: 100%;
  padding-top: ${HEADER_HEIGHT};
  background-color: var(--color-secondary);
  .swiper-pagination-bullet-active {
    background-color: ${(props) =>
      props.page === 0 ? 'var(--color-whiter)' : 'var(--color-primary)'};
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 390px;
  margin: 0 auto;
  padding: 0 1rem;

  @media (max-width: 400px) {
    max-width: 100%;
  }
`;

const StyledSwiper = styled(Swiper)`
  width: 100%;
  height: auto;
  margin-bottom: 0.5rem;

  .swiper-pagination {
    bottom: -25px;
  }

  .swiper-pagination-bullet {
    width: 8px;
    height: 8px;
    background-color: #d9d9d9;
    opacity: 1;

    &-active {
      background-color: var(--color-primary);
    }
  }
`;

const NavigationButtons = styled(Flex)`
  justify-content: space-between;
  width: 100%;
  padding: 0 1rem;
`;

const NavButton = styled(Button)`
  width: 120px;
  height: 40px;
  border-radius: 8px;
  background-color: var(--color-primary);
  color: white;
  font-size: 16px;

  &:disabled {
    background-color: #d9d9d9;
    cursor: not-allowed;
  }
`;

const StartButton = styled(Button)`
  width: 80%;
  height: 40px;
  border-radius: 8px;
  background-color: var(--color-primary);
  color: white;
  font-size: 16px;
`;

const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;

  .custom-bullet {
    width: 10px;
    height: 10px;
    margin: 0 5px;
    border-radius: 50%;
    background-color: white;
    display: inline-block;
    cursor: pointer;

    &.custom-bullet-active {
      background-color: var(--color-primary);
    }
  }
`;

const StartMessage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 40vh;
  font-size: 24px;
  font-weight: bold;
  color: var(--color-primary);
`;
