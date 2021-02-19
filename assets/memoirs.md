# Pair Programing Memoirs

1. 몰랐던 것
  - innterHTML이 원래 있던 내용을 지우는 줄 몰랐다.
  - array[array.length - 1]
  - css 변수에 접근하는 방법을 알았다. (getPropertyValue, setProperty)
  - clientWidth, offsetWidth를 알았다.
  - 상태 변수에 대해 조그맣게 알게 되었다. 상태 변수를 조작하므로 전체를 조작할 수 있다.
  - load 이벤트를 사용해 보았다.
  - 템플릿 리터럴에서, ${} 안에는 표현식이 들어가고, 그 표현식은 문자 타입으로 평가되어야 한다.
  - transitionend 이벤트. 

2. 느낀 점
  - 찬찬히 들여다 봐야겠다.

3. 다음 목표
  - 무한 루핑.

# Pair Programing Memoirs 2

1. transitionend
  - 트랜지션이 동작하는 상태를 알기 위해 상태 변수를 둘 수 있다.
  - 상태 변수에 따라 버튼 이벤트의 동작을 제어.
  - 배열의 길이에 상관없이 동작할 수 있도록 firstSlide, lastSlide 변수 사용.

2. 느낀 점
  - 상태를 불리언 값으로 만들어 내는 과정이 참신했다.

3. 다음 목표
  - 리팩토링 + 이동 버튼