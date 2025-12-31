import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import styles from "./Brand.module.scss";
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import { Helmet } from "react-helmet-async";

// import page1 from "../../assets/Brand/intro/page1.jpg";

import Ready from "../../components/Ready/Ready"

const Brand1 = () => {
  const menuContents = [
    { title: "브랜드 소개", url: "/brand/intro" },
    { title: "홍보 영상", url: "/brand/video" },
  ];
  const [isScroll, setIsScroll] = useState(false);
  const [isTextVisible, setIsTextVisible] = useState(false); // 텍스트 애니메이션 상태
  const [isImageVisible, setIsImageVisible] = useState(false); // 이미지 애니메이션 상태
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 0);
      // 스크롤 시 이미지와 텍스트 애니메이션을 트리거
      if (window.scrollY > 200) {
        setIsImageVisible(true); // 이미지가 보이도록
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTextVisible(true); // 메뉴 클릭 시 텍스트가 보이도록
    }, 500); // 딜레이를 두고 텍스트 애니메이션 시작

    return () => clearTimeout(timer);
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
        <title>가경 아르보레 - 브랜드 소개</title>
        <meta
          name="description"
          content="가경 아르보레는 청주 가경동 홍골공원 민간공원 특례사업으로 조성되는 장기일반민간임대 주거단지입니다. 숲세권 입지와 도심 인프라를 동시에 누릴 수 있도록 설계된 프리미엄 브랜드로, 10년 전세형 안정 거주와 합리적인 내 집 마련 기회를 제공합니다. 입주자의 삶의 질을 최우선으로 고려한 공간 설계와 지속 가능한 주거 문화를 목표로 합니다."
        />
        <meta
          name="keywords"
          content="가경 아르보레, 가경 아르보레 모델하우스, 청주 가경동 아르보레, 홍골공원 아파트"
        />
        <link rel="canonical" href="https://niceoi.kr//Brand/intro" />

        {/* Open Graph - 소셜 미디어 공유 최적화 */}
        <meta
          property="og:title"
          content="가경 아르보레 - 브랜드 소개"
        />
        <meta
          property="og:description"
          content="가경 아르보레의 브랜드 철학과 가치를 소개합니다. 청주 가경동 홍골공원을 품은 숲세권 장기일반민간임대 단지로, 10년 전세형 안정 거주와 미래 분양 전환 기회를 동시에 제공합니다. 자연 친화적 설계와 도심 생활 인프라, 합리적인 주거 비용을 중심 가치로 삼아 새로운 주거 기준을 제시합니다."
        />
        <meta
          property="og:image"
          content="https://niceoi.kr//Main1.png"
        />
        <meta
          property="og:url"
          content="https://niceoi.kr//Brand/intro"
        />
        <meta property="og:site_name" content="가경 아르보레" />

        {/* Twitter 카드 설정 */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="가경 아르보레 - 브랜드 소개"
        />
        <meta
          name="twitter:description"
          content="가경 아르보레는 청주 가경동 홍골공원 인근에 들어서는 숲세권 장기일반민간임대 단지입니다. 10년 전세형 상품으로 세금 부담을 줄이면서 장기 거주와 내 집 마련을 준비할 수 있는 새로운 주거 브랜드입니다."
        />
        <meta
          name="twitter:image"
          content="https://niceoi.kr//Main1.png"
        />
        <meta
          name="twitter:url"
          content="https://niceoi.kr//Brand/intro"
        />

        {/* 구조화된 데이터 (JSON-LD) - 검색엔진 이해도 향상 */}
        <script type="application/ld+json">
          {`
                                        {
                                            "@context": "https://schema.org",
                                            "@type": "WebPage",
                                            "name": "가경 아르보레 - 브랜드 소개",
                                            "description": "가경 아르보레의 브랜드 철학과 가치를 소개합니다. 청주 가경동 홍골공원 민간공원 특례사업으로 조성되는 숲세권 장기일반민간임대 단지로, 10년 전세형 안정 거주와 미래 분양 전환 기회를 제공하는 새로운 주거 브랜드입니다.",
                                            "url": "https://niceoi.kr//Brand/intro"
                                        }
                                        `}
        </script>
      </Helmet>

      <Header isChanged={isScroll} />
      <FixIcon />

      <Bener title="가경 아르보레" />

      <MenuBar contents={menuContents} />
      {/* <h1> 태그를 사용하여 페이지 제목 설정 (SEO 최적화) */}
      <h1 className={styles.screenReaderOnly}>
        가경 아르보레 - 브랜드소개
      </h1>
      <p className={styles.screenReaderOnly}>
        가경 아르보레는 청주 가경동 홍골공원 인근에 들어서는 숲세권 장기일반민간임대 단지입니다.
        안정적인 10년 전세형 구조와 합리적인 분양 전환을 통해 입주자에게 부담을 줄이면서도
        프리미엄 주거 환경을 제공합니다. 자연과 도심 인프라를 모두 누릴 수 있는 입지와
        체계적인 단지 설계를 바탕으로 새로운 주거 기준을 제시하는 가경 아르보레의
        브랜드 가치를 직접 경험해보세요.
      </p>

      <div
        className={`${styles.textBox} ${isTextVisible ? styles.active : ""}`}
      >
        <div>생활의 모든 것을 한걸음에</div>
        <div>가경 아르보레, 청주 가경동 숲세권의 중심에 서다</div>
      </div>


      {/* <img
        className={`${styles.image} ${isImageVisible ? styles.visible : ""}`}
        src={page1}
        alt="가경 아르보레brand-Image1"
      /> */}

      <Ready/>

      <Footer />
    </div>
  );
};

export default Brand1;
