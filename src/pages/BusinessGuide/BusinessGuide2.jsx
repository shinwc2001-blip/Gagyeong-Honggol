import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styles from "./BusinessGuide.module.scss";
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import { Helmet } from "react-helmet-async";

// import page1 from "../../assets/BusinessGuide/BusinessGuide2/page1.jpg";

import Ready from "../../components/Ready/Ready"

const BusinessGuide2 = () => {
  const menuContents = [
    { title: "사업안내", url: "/BusinessGuide/intro" },
    { title: "분양일정", url: "/BusinessGuide/plan" },
    { title: "계약안내문", url: "/BusinessGuide/documents" },
  ];
  const [isScroll, setIsScroll] = useState(false);
  const [isImageVisible, setIsImageVisible] = useState(false); // isImageVisible 상태 추가
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

      // 이미지가 화면에 보이는지 체크 (예시)
      if (window.scrollY > 200) {
        // 예시: 스크롤이 200px 이상 내려가면 이미지 보이기
        setIsImageVisible(true);
      } else {
        setIsImageVisible(false);
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
        <title>가경 아르보레 - 분양일정</title>
        <meta
          name="description"
          content="가경 아르보레의 분양 및 임차인 모집 일정 안내 페이지입니다. 청약 및 계약에 필요한 주요 일정을 한눈에 확인할 수 있으며, 일정 변경 시 신속하게 업데이트됩니다. 입주를 준비하시는 분들이 계획적으로 신청할 수 있도록 정확한 절차와 일정을 제공합니다."
        />
        <meta
          name="keywords"
          content="가경 아르보레, 가경 아르보레 분양일정, 가경 아르보레 모집일정"
        />
        <link rel="canonical" href="https://www.model-house.co.kr/BusinessGuide/plan" />

        {/* Open Graph - 소셜 미디어 공유 최적화 */}
        <meta property="og:title" content="가경 아르보레 - 분양일정" />
        <meta
          property="og:description"
          content="가경 아르보레의 분양 및 임차인 모집 일정을 안내합니다. 청약, 계약, 입주와 관련된 주요 일정을 정확하게 확인하고 준비하세요."
        />
        <meta
          property="og:image"
          content="https://www.model-house.co.kr/Main1.png"
        />
        <meta
          property="og:url"
          content="https://www.model-house.co.kr/BusinessGuide/plan"
        />
        <meta property="og:site_name" content="가경 아르보레" />

        {/* Twitter 카드 설정 */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="가경 아르보레 - 분양일정"
        />
        <meta
          name="twitter:description"
          content="가경 아르보레 분양·모집 일정을 통해 청약 및 계약 절차를 미리 확인하고 준비해 보세요."
        />
        <meta
          name="twitter:image"
          content="https://www.model-house.co.kr/Main1.png"
        />
        <meta
          name="twitter:url"
          content="https://www.model-house.co.kr/BusinessGuide/plan"
        />

        {/* 구조화된 데이터 (JSON-LD) - 검색엔진 이해도 향상 */}
        <script type="application/ld+json">
          {`
					{
						"@context": "https://schema.org",
						"@type": "WebPage",
						"name": "가경 아르보레 - 분양일정",
						"description": "가경 아르보레의 분양 및 임차인 모집 일정을 종합적으로 안내합니다. 청약 접수, 계약, 입주 일정 등 중요한 일정을 한눈에 확인할 수 있습니다.",
						"url": "https://www.model-house.co.kr/BusinessGuide/plan"
					}
					`}
        </script>
      </Helmet>

      <Header isChanged={isScroll} />
      <FixIcon />

      <Bener title="분양일정" />

      <MenuBar contents={menuContents} />
      {/* <h1> 태그를 사용하여 페이지 제목 설정 (SEO 최적화) */}
      <h1 className={styles.screenReaderOnly}>
        가경 아르보레 - 분양일정
      </h1>
      <p className={styles.screenReaderOnly}>
        가경 아르보레의 분양 및 임차인 모집 일정은 입주를 준비하는 분들을 위한
        핵심 정보입니다. 주요 일정과 변경 사항을 안내하여 청약과 계약을
        체계적으로 준비할 수 있도록 돕습니다. 분양 및 모집 공고를 통해 세부
        조건과 일정을 확인하시기 바랍니다.
      </p>

      <div className={styles.textBox}>
        <div>청주 가경동 숲세권 프리미엄의 가치 위에</div>
        <div>가경 아르보레가 새로운 자부심으로 찾아옵니다.</div>
      </div>


      {/* 이미지에 isImageVisible 상태 적용 */}
      {/* <img
        className={`${styles.image4} ${isImageVisible ? styles.visible : ""}`}
        src={page1}
        alt="가경 아르보레 분양일정안내-image1"
      /> */}
<Ready/>
     
      <Footer />
    </div>
  );
};

export default BusinessGuide2;
