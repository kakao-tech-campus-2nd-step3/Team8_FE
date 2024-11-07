import { useState } from 'react';

import type { Swiper as SwiperType } from 'swiper';

import { LoginButton } from './components';
import { FirstPage, SecondPage, ThirdPage } from './components/swipe-page';
import styled from '@emotion/styled';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const MainPage = () => {
  const [page, setPage] = useState(0);

  const handleSlideChange = (swiper: SwiperType) => {
    setPage(swiper.activeIndex);
  };

  return (
    <MainPageLayout page={page}>
      <Wrapper>
        <StyledSwiper
          slidesPerView={1}
          navigation={true}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          keyboard={true}
          modules={[Pagination]}
          onSlideChange={handleSlideChange}
        >
          <SwiperSlide>
            <FirstPage />
          </SwiperSlide>
          <SwiperSlide>
            <SecondPage />
          </SwiperSlide>
          <SwiperSlide>
            <ThirdPage />
          </SwiperSlide>
        </StyledSwiper>

        <LoginButton />
      </Wrapper>
    </MainPageLayout>
  );
};

export default MainPage;

type PageProps = {
  page: number;
};

const MainPageLayout = styled.div<PageProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  background-color: ${(props) =>
    props.page === 0 ? 'var(--color-primary)' : 'var(--color-white)'};
  transition: background 0.3s ease;

  .swiper-pagination-bullet-active {
    background-color: ${(props) =>
      props.page === 0 ? 'var(--color-secondary)' : 'var(--color-primary)'};
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  height: 100%;
  width: 100%;
  max-height: 700px;
`;

const StyledSwiper = styled(Swiper)`
  width: 80%;
  max-width: 28.75rem;
  height: 100%;
  margin-bottom: 1rem;
`;
