import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import styles from "./LocationEnvironment.module.scss";
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import LocationSectionBox from "../../components/LocationSectionBox/LocationSectionBox";
import { Helmet } from "react-helmet-async";

import page1 from "../../assets/LocationEnvironment/LocationEnvironment1/page1.jpg";
import section2Image1 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-1.jpg";
import section2Image2 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-2.jpg";
import section2Image3 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-3.jpg";
import section2Image4 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-4.jpg";
import section2Image5 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-5.jpg";
import section2Image6 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-6.jpg";
import HelmetCOM from "../../components/HelmetCOM/HelmetCOM";

const LocationSection = [
  {
    img: section2Image1,
    titleText:
      "확정된 개발호재로<br />청주를 더 새롭게<br />살수록 높아지는 미래가치",
    contentText:
      "홍골공원 민간공원 특례사업으로 조성되는 대규모 주거 타운<br />공원과 주거가 결합된 도심 속 숲세권 프리미엄",
  },
  {
    img: section2Image2,
    titleText: "도보로 누리는<br />공원·생활인프라 프리미엄",
    contentText:
      "홍골공원 인접 쾌적한 자연환경<br />대형마트·학교·병원 등 생활편의시설 가깝게 위치",
  },
  {
    img: section2Image3,
    titleText: "청주의 중심을 더 가깝게<br />쾌속으로 연결되는 교통환경",
    contentText:
      "제2순환로, 서청주IC, 청주강서IC 접근성 우수<br />청주권 주요 업무·상업지로 편리한 이동",
  },
  {
    img: section2Image4,
    titleText:
      "학교, 쇼핑, 병원, 문화를 한걸음에<br />모두 누리는 원스톱 생활권",
    contentText:
      "가경동 상업지구 인접<br />대형마트·영화관·병원 등 풍부한 생활 인프라",
  },
  {
    img: section2Image5,
    titleText: "품격 있는 주거공간 프리미엄",
    contentText:
      "전세대 남향 위주의 배치와 합리적인 평면 설계<br/>채광과 통풍을 고려한 쾌적한 주거공간",
  },
  {
    img: section2Image6,
    titleText:
      "홍골공원과 맞닿은 자연 특화입지<br />단지 앞에서 누리는 공원생활",
    contentText:
      "산책로·휴식 공간이 어우러진 공원 프리미엄<br />자연과 일상이 연결되는 힐링 라이프",
  },
];

const LocationEnvironment1 = () => {
  const menuContents = [
    { title: "입지안내", url: "/LocationEnvironment/intro" },
    { title: "프리미엄", url: "/LocationEnvironment/primium" },
  ];
  const [isScroll, setIsScroll] = useState(false);
  const { pathname } = useLocation(); // 현재 경로를 가져옴

  useEffect(() => {
    window.scrollTo(0, 0); // 페이지가 로드될 때 스크롤을 최상단으로 이동
  }, [pathname]); // pathname이 변경될 때마다 실행

  // 화면 스크롤이 탑이 아니면 isScroll 값 true로 변환
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
        <title>가경 아르보레 - 입지안내</title>
        <meta
          name="description"
          content="가경 아르보레는 청주 가경동 홍골공원을 품은 숲세권 입지와 제2순환로·가경터미널 등 우수한 교통망, 풍부한 생활 인프라가 결합된 단지입니다. 입지안내를 통해 주변 교통, 교육, 쇼핑, 공원 등 입주 후 생활환경과 미래 가치를 종합적으로 확인해 보세요."
        />
        <meta
          name="keywords"
          content="가경 아르보레, 가경 아르보레 입지, 청주 가경동 아파트, 홍골공원 아파트"
        />
        <link rel="canonical" href="https://www.model-house.co.kr/LocationEnvironment/intro" />

        {/* Open Graph - 소셜 미디어 공유 최적화 */}
        <meta
          property="og:title"
          content="가경 아르보레 - 입지안내"
        />
        <meta
          property="og:description"
          content="청주 가경동 홍골공원을 품은 가경 아르보레의 입지 정보를 확인해 보세요. 숲세권 환경, 제2순환로와 가경터미널을 중심으로 한 교통 편의, 풍부한 생활 인프라와 미래 개발호재까지 한눈에 살펴볼 수 있습니다."
        />
        <meta
          property="og:image"
          content="https://www.model-house.co.kr/Main1.png"
        />
        <meta
          property="og:url"
          content="https://www.model-house.co.kr/LocationEnvironment/intro"
        />
        <meta property="og:site_name" content="가경 아르보레" />

        {/* Twitter 카드 설정 */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="가경 아르보레 - 입지안내"
        />
        <meta
          name="twitter:description"
          content="가경 아르보레 입지안내 페이지에서 홍골공원 숲세권, 가경터미널과 제2순환로가 제공하는 교통 편의, 생활 인프라 및 향후 개발계획을 확인해 보세요."
        />
        <meta
          name="twitter:image"
          content="https://www.model-house.co.kr/Main1.png"
        />
        <meta
          name="twitter:url"
          content="https://www.model-house.co.kr/LocationEnvironment/intro"
        />

        {/* 구조화된 데이터 (JSON-LD) - 검색엔진 이해도 향상 */}
        <script type="application/ld+json">
          {`
				 {
						"@context": "https://schema.org",
						"@type": "WebPage",
						"name": "가경 아르보레 - 입지안내",
						"description": "가경 아르보레 입지안내 페이지는 청주 가경동 홍골공원 인접 숲세권 입지와 제2순환로·가경터미널 등 교통망, 교육·쇼핑·공원 인프라 및 향후 개발호재 정보를 종합적으로 제공합니다.",
						"url": "https://www.model-house.co.kr/LocationEnvironment/intro"
				 }
				 `}
        </script>
      </Helmet>

      <Header isChanged={isScroll} />
      <FixIcon />

      <Bener title="입지환경" />

      <MenuBar contents={menuContents} />
      {/* <h1> 태그를 사용하여 페이지 제목 설정 (SEO 최적화) */}
      <h1 className={styles.screenReaderOnly}>
        가경 아르보레 - 입지안내
      </h1>
      <p className={styles.screenReaderOnly}>
        가경 아르보레 입지 안내 페이지는 청주 가경동에 위치한 단지의 입지와
        주변 인프라 정보를 제공합니다. 제2순환로와 가경터미널을 기반으로 한
        교통 환경, 인근 학교와 학원가, 대형마트와 상업시설, 홍골공원 등
        생활·자연 인프라를 종합적으로 소개하여, 실제 거주 시 누리게 될
        생활 환경과 미래 가치를 객관적으로 확인할 수 있도록 돕습니다.
      </p>

      <div className={styles.textBox}>
        <div>청주 가경동, 홍골공원을 품은 숲세권 중심에서</div>
        <div>생활·교통·자연이 한 번에 연결되는 입지</div>
        <div>가경 아르보레가 새로운 주거 기준을 완성합니다</div>
      </div>


      <img
        src={page1}
        className={styles.image2}
        alt="가경 아르보레 입지안내-image1"
      />

      <div className={styles.section2}>
        {LocationSection.map((value, idx) => (
          <LocationSectionBox
            image={value.img}
            title={value.titleText}
            text={value.contentText}
          />
        ))}
      </div>


      <Footer />
    </div>
  );
};

export default LocationEnvironment1;
