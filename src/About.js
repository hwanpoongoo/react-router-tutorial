import React from "react";
import qs from 'qs';
import { useSearchParams } from 'react-router-dom';

const About = () => {
  const [searchParams, setSearchParams] = useSearchParams();
 
  /*
  const query = qs.parse(navigate.location.search, {
    ignoreQueryPrefix : true
  });
  */

  const showDetail = searchParams.get('detail') === 'true';
  
  return (
    <div>
      <h1>소개</h1>
      <p>이 프로젝트는 리액트 라우터 기초를 실습해보는 예제 프로젝트입니다</p>
      {showDetail && <p>detail 값을 true로 설정하셨군요!</p>}
    </div>
  );
};

export default About;
