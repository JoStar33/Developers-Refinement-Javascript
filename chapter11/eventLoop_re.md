# 이벤트 루프란?
(참고문서를 보지않고 작성해보도록 하자.)

자바스크립트 비동기 처리 과정을 말한다.

비동기 처리를 위한 콜백함수가 콜스택상에 들어온다면, 해당 콜백함수를 Web API상으로 넘기고, 넘어간 Web API에서 비동기 처리를 실행한다.

이후 콜백함수를 이벤트큐 상으로 넘기고, 전달받은 콜백함수는 콜스택상에 어떠한 실행컨텍스트도 존재하지 않을 경우에, 다시 콜스택으로 넘어가 함수를 실행시킨다.
