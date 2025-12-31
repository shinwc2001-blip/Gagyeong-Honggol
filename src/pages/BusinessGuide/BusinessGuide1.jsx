import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import styles from "./BusinessGuide.module.scss";
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import page1 from "../../assets/BusinessGuide/BusinessGuide1/page1.jpg";
import tableImage from "../../assets/BusinessGuide/BusinessGuide1/tableImage.jpg";
import { Helmet } from "react-helmet-async";

const projectData = [
  { label: "사업명", value: "가경 아르보레" },
  { label: "사업위치", value: "충청북도 청주시 흥덕구 가경동 홍골공원 일원" },
  { label: "대지면적", value: "약 64,616㎡" },
  { label: "연면적", value: "약 223,159㎡" },
  { label: "건축규모", value: "지하 2층 ~ 지상 29층 / 7개동" },
  { label: "세대수", value: "전용 84㎡ A·B·C / 총 921세대(예정)" },
];


const BusinessGuide1 = () => {
  const menuContents = [
    { title: "사업안내", url: "/BusinessGuide/intro" },
    { title: "분양일정", url: "/BusinessGuide/plan" },
    { title: "계약안내문", url: "/BusinessGuide/documents" },
  ];
  const [isScroll, setIsScroll] = useState(false);
  const { pathname } = useLocation(); // 현재 경로를 가져옴
  const isMobile = useMediaQuery({ query: "(max-width: 900px)" }); // 모바일 여부 확인

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
        <title>가경 아르보레 - 사업안내</title>
        <meta
          name="description"
          content="가경 아르보레는 청주 가경동 홍골공원 민간공원 특례사업으로 조성되는 숲세권 장기일반민간임대 주거단지입니다. 본 페이지에서는 사업의 개요, 개발 방향, 단지 설계 특징, 주변 교통 및 생활 인프라 등 핵심 정보를 체계적으로 소개하여 입주자와 투자자가 합리적인 선택을 할 수 있도록 돕습니다."
        />
        <meta
          name="keywords"
          content="가경 아르보레, 가경 아르보레 사업개요, 청주 가경동 아르보레, 홍골공원 민간임대"
        />
        <link rel="canonical" href="https://niceoi.kr/Brand/intro" />

        {/* Open Graph - 소셜 미디어 공유 최적화 */}
        <meta property="og:title" content="가경 아르보레 - 사업안내" />
        <meta
          property="og:description"
          content="가경 아르보레는 홍골공원을 품은 숲세권 입지와 10년 전세형 구조를 갖춘 장기일반민간임대 단지입니다. 청주 가경동의 새로운 주거 중심지로서 사업 개요와 개발 계획, 단지 특장점을 한눈에 확인할 수 있습니다."
        />
        <meta
          property="og:image"
          content="https://niceoi.kr/Main1.png"
        />
        <meta
          property="og:url"
          content="https://niceoi.kr/Brand/intro"
        />
        <meta property="og:site_name" content="가경 아르보레" />

        {/* Twitter 카드 설정 */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="가경 아르보레 - 사업안내"
        />
        <meta
          name="twitter:description"
          content="가경 아르보레 사업안내 페이지에서 청주 가경동 홍골공원 특례사업, 장기일반민간임대 구조, 단지 설계와 생활 인프라 등 핵심 정보를 자세히 확인해보세요."
        />
        <meta
          name="twitter:image"
          content="https://niceoi.kr/Main1.png"
        />
        <meta
          name="twitter:url"
          content="https://niceoi.kr/Brand/intro"
        />

        {/* 구조화된 데이터 (JSON-LD) - 검색엔진 이해도 향상 */}
        <script type="application/ld+json">
          {`
		{
			"@context": "https://schema.org",
			"@type": "WebPage",
			"name": "가경 아르보레 - 사업안내",
			"description": "가경 아르보레는 청주 가경동 홍골공원 민간공원 특례사업으로 조성되는 숲세권 장기일반민간임대 단지입니다. 본 페이지에서는 사업의 목적, 개발 개요, 단지 특장점과 주변 인프라 정보를 제공하여 입주 희망자에게 실질적인 의사결정 자료를 제공합니다.",
			"url": "https://niceoi.kr/Brand/intro"
		}
		`}
        </script>
      </Helmet>

      <Header isChanged={isScroll} />
      <FixIcon />

      <Bener title="사업개요" />

      <MenuBar contents={menuContents} />
      {/* <h1> 태그를 사용하여 페이지 제목 설정 (SEO 최적화) */}
      <h1 className={styles.screenReaderOnly}>
        가경 아르보레 - 사업안내
      </h1>
      <p className={styles.screenReaderOnly}>
        가경 아르보레는 청주 가경동 홍골공원 민간공원 특례사업으로 조성되는
        숲세권 장기일반민간임대 주거단지입니다. 이 페이지에서는 사업의 전체적인
        개요와 개발 계획, 단지 설계 방향과 주변 교통·생활 인프라를 종합적으로
        소개합니다. 장기 안정 거주와 합리적인 내 집 마련을 동시에 고려하는
        고객들에게 필요한 정보를 제공하여 보다 나은 선택을 할 수 있도록 돕습니다.
      </p>

      <div className={styles.textBox}>
        <div>
          청주 가경동, 홍골공원을 품은 도심 속 숲세권에서 누리는 특별한 라이프 컬렉션
        </div>
        <div>가경 아르보레가 새로운 자부심으로 찾아옵니다.</div>
      </div>


      <img
        className={styles.img3}
        src={page1}
        alt="가경 아르보레 조감도-image1"
      />

      <div className={styles.tableContainer}>
        {!isMobile && <img className={styles.tableImg} src={tableImage} />}
        <table className={styles.projectTable}>
          <tbody>
            {projectData.map((item, index) => (
              <tr key={index}>
                <td className={styles.label}>{item.label}</td>
                <td className={styles.contents}>{item.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className={styles.commonBox}>
        <div className={styles.notice}>
          ※ 상기 이미지에 표현된 외관 디자인은 개략적인 이해를 돕기 위한 것으로,
          상품특화 및 인허가 협의에 따라 입면 디자인, 경관조명, 출입구, 색채,
          몰딩, 창호, 난간, 옥상 장식물, 줄눈, 각종 시설물의 디자인 및 형태,
          마감사양, 조명 설치 위치 등이 실시공시 변경될 수 있습니다.
        </div>
        <div className={styles.notice}>
          ※ 본 단지의 명칭, 동호수 표기, 외부 색채, 외관 디자인, 옥탑 디자인,
          외부 조명시설, 태양광 발전 설비시설 등은 현장 여건 및 인허가 관청과의
          심의, 협의 과정에서 향후 변경될 수 있습니다.
        </div>
        <div className={styles.notice}>
          ※ 단지 공용 태양광 패널이 주동 옥상에 설치될 예정이며, 시설을
          훼손하거나 제거할 수 없습니다. 또한, 본 공사 시 시공 여건에 따라 위치
          및 규모(크기, 높이, 개소)가 변경될 수 있습니다.
        </div>
        <div className={styles.notice}>
          ※ 문주, 경비실, 외부 엘리베이터실, 계단실 등 외부 시설물의 형태,
          디자인, 마감재 등은 기능 및 외관 개선을 위해 변경될 수 있습니다.
        </div>
        <div className={styles.notice}>
          ※ 옥상 구조물은 본 공사 시 형태 변경 또는 구조물 지지를 위한 기둥이
          추가 시공될 수 있습니다.
        </div>
        <div className={styles.notice}>
          ※ 본 공사 시 옥상구조물 상부는 도장 시공을 하지 않습니다.
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BusinessGuide1;
