import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import YouTube from "react-youtube";

import styles from "./Brand.module.scss";
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import { Helmet } from "react-helmet-async";

const Brand2 = () => {
  const menuContents = [
    { title: "브랜드 소개", url: "/brand/intro" },
    { title: "홍보 영상", url: "/brand/video" },
  ];
  const [isScroll, setIsScroll] = useState(false);
  const [isTextVisible, setIsTextVisible] = useState(true); // isTextVisible 상태 추가
  const isMobile = useMediaQuery({ query: "(max-width: 900px)" });
  const { pathname } = useLocation(); // 현재 경로를 가져옴

  useEffect(() => {
    window.scrollTo(0, 0); // 페이지가 로드될 때 스크롤을 최상단으로 이동
  }, [pathname]); // pathname이 변경될 때마다 실행

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={styles.container}>
      <Helmet>
        {/* 기본 문자셋 및 모바일 최적화를 위한 meta 태그 */}
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
        <meta name="theme-color" content="#ffffff" />
        <meta name="robots" content="index, follow" />

        {/* SEO 최적화를 위한 메타 태그 */}
        <title>가경 아르보레 - 홍보영상</title>
        <meta
          name="description"
          content="가경 아르보레 홍보영상은 청주 가경동 숲세권 장기일반민간임대 단지의 가치와 비전을 담아냅니다. 홍골공원을 품은 쾌적한 자연환경, 편리한 교통과 생활 인프라, 10년 전세형 안정 거주라는 핵심 장점을 감성적인 스토리텔링과 영상미로 보여줍니다."
        />
        <meta
          name="keywords"
          content="가경 아르보레, 가경 아르보레 홍보영상, 가경 아르보레 모델하우스"
        />
        <link rel="canonical" href="https://niceoi.kr/Brand/video" />

        {/* Open Graph - 소셜 미디어 공유 최적화 */}
        <meta property="og:title" content="가경 아르보레 - 홍보영상" />
        <meta
          property="og:description"
          content="가경 아르보레의 홍보영상은 숲세권 입지, 편리한 생활환경, 10년 전세형 구조 등 단지의 핵심 장점을 입체적인 영상미로 전달합니다. 청주 가경동의 새로운 주거 기준을 영상으로 미리 만나보세요."
        />
        <meta
          property="og:image"
          content="https://niceoi.kr/Main1.png"
        />
        <meta
          property="og:url"
          content="https://niceoi.kr/Brand/video"
        />
        <meta property="og:site_name" content="가경 아르보레" />

        {/* Twitter 카드 설정 */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="가경 아르보레 - 홍보영상"
        />
        <meta
          name="twitter:description"
          content="가경 아르보레 홍보영상을 통해 청주 가경동 홍골공원을 품은 숲세권 장기임대 단지의 프리미엄 라이프스타일을 생생하게 확인해보세요."
        />
        <meta
          name="twitter:image"
          content="https://niceoi.kr/Main1.png"
        />
        <meta
          name="twitter:url"
          content="https://niceoi.kr/Brand/video"
        />

        {/* 구조화된 데이터 (JSON-LD) - 검색엔진 이해도 향상 */}
        <script type="application/ld+json">
          {`
															{
																"@context": "https://schema.org",
																"@type": "WebPage",
																"name": "가경 아르보레 - 홍보영상",
																"description": "가경 아르보레의 홍보영상은 청주 가경동 홍골공원 인근에 들어서는 숲세권 장기일반민간임대 단지의 입지, 설계, 생활 인프라, 10년 전세형 구조 등 주요 특징을 직관적으로 보여주는 콘텐츠입니다.",
																"url": "https://niceoi.kr/Brand/video"
															}
															`}
        </script>
      </Helmet>

      <Header isChanged={isScroll} />
      <FixIcon />

      <Bener title="홍보영상" />

      <MenuBar contents={menuContents} />
      {/* <h1> 태그를 사용하여 페이지 제목 설정 (SEO 최적화) */}
      <h1 className={styles.screenReaderOnly}>
        가경 아르보레 - 홍보영상
      </h1>
      <p className={styles.screenReaderOnly}>
        가경 아르보레의 홍보영상은 청주 가경동 홍골공원을 품은 숲세권 장기일반민간임대 단지의
        주요 특징과 장점을 시각적으로 전달하는 매체입니다. 단지 설계, 입지, 생활 편의시설과
        10년 전세형 구조의 장점을 고품질 영상으로 소개하여, 분양을 고민하는 고객들에게
        직관적이고 유익한 정보를 제공합니다. 영상을 통해 가경 아르보레의 프리미엄 가치를
        더욱 깊이 있게 경험해보실 수 있습니다.
      </p>

      <div
        className={`${styles.textBox} ${isTextVisible ? styles.active : ""}`}
      >
        <div>가경 아르보레가 눈부신 가치 위에</div>
        <div>새로운 자부심으로 찾아옵니다.</div>
      </div>


      <div className={styles.videoContainer}>
        <YouTube
          videoId="jziyaoDz2Ns"
          opts={{
            width: isMobile ? "400" : "1300",
            height: isMobile ? "300" : "500",
            playerVars: {
              autoplay: 1,
              rel: 0,
              modestbranding: 1,
            },
          }}
          onEnd={(e) => {
            e.target.stopVideo(0); // 비디오 종료 시 정지
          }}
        />
      </div>

      <Footer />
    </div>
  );
};

export default Brand2;
