
import type { AppProps } from 'next/app'

// This default export is required in a new `pages/_app.js` file.
/**
 * 이곳에서 렌더링 하는 값은 무조건 모든 페이지에 영향을 준다
  최초로 실행되는 것은 _app.js
  내부에 컴포넌트가 있다면 전부 실행하고 html의 body로 구성됨
  여기서 props로 받은 Component는 요청한 페이지이다. Component 에는 /pages/index.js 파일이 props로 내려오게 된다.
  pageProps는 페이지 getInitialProps를 통해 내려 받은 props들을 말한다(미리가져온 초기객체) 
  그 다음 _document.js가 실행됨
  _app.js에서 consle.log 실행시 client, server둘다 콘솔 찍힘
  global css를 여기서 선언한다
  componentDIdCatch 이용해 커스텀 에러 핸들링이 가능하다.  
  페이지 전환시 상태값을 유지할 수 있다
 */

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
