import React, { useEffect, useState } from "react";
import styles from "./Bener.module.scss";
import img from "../../assets/Bener/bener.jpg";

const Bener = ({ title }) => {
    const [isLoaded, setIsLoaded] = useState(false);

    // 이미지가 로드된 후 애니메이션 시작
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoaded(true); // 이미지 로딩 후 애니메이션을 시작
        }, 100); // 0.1초 후에 애니메이션을 시작

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={styles.container}>
            {/* 배너 이미지 */}
            <img
                className={`${styles.benerImage} ${isLoaded ? styles.showImage : ''}`}
                src={img}
                alt="jungheung-class-bener"
            />
            <div className={styles.overlay}></div>
            <div
                className={`${styles.contents} ${isLoaded ? styles.showContents : ''}`}
            >
                <div
                    className={`${styles.title} ${isLoaded ? styles.showTitle : ''}`}
                >
                    {title}
                </div>
                {contents(title, isLoaded)}
            </div>
        </div>
    );
};

export default Bener;

const contents = (text, isLoaded) => {
    if (text === '푸르지오' || text === '홍보영상' || text === '체크포인트'| text === '당첨자서류안내') {
        return (
            <>
                <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
                    지친 하루를 마치고 가장 나에 가까운 본연의 모습으로 돌아와 누리는 프리미엄입니다.
                </div>
                <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
                    청주 가경동, 홍골공원 중심의 도심 속 숲세권 라이프
                </div>
                <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
                    NO.1 숲세권 민간임대 단지, 가경 아르보레와 함께합니다.
                </div>
            </>
        );
    } else if (text === '사업개요' || text === '세대안내' || text === '인테리어' || text === '청약안내' || text === '모집공고안내' || text === '인지세납부안내') {
        return (
            <>
                <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
                    청주 가경 공원특례로 완성되는 새로운 주거 중심지
                </div>
                <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
                    제2순환로 · 가경터미널 · 청주강서IC가 누리는 트리플 교통 프리미엄
                </div>
                <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
                    10년 전세형 민간임대로 시작하는 안정적인 내 집 마련
                </div>
                <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
                    가경 아르보레
                </div>
            </>
        );
    } else if (text === '입지환경') {
        return (
            <>
                <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
                    홍골공원을 품은 숲세권, 삶의 수준을 높이는 도심 속 힐링 라이프
                </div>
                <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
                    기대하던 모든 프리미엄이 가경 아르보레에서 펼쳐집니다.
                </div>
            </>
        );
    } else if (text === '단지안내') {
        return (
            <>
                <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
                    주거의 품격과 가치를 높이는 특화 설계
                </div>
                <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
                    편리한 생활을 위한 최적의 공간 설계
                </div>
                <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
                    소수에게만 허락된 가경 아르보레, 청주 가경동의 새로운 기준이 됩니다.
                </div>
            </>
        );
    }
};
