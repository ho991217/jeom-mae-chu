# 점심메뉴 추천 라이브러리

[점메추(jeom-mae-chu)](https://www.npmjs.com/package/jeom-mae-chu) 라이브러리는 매일 점심시간마다 무엇을 먹을지 고민하는 분들을 위해 개발되었습니다. 간단하게 함수 호출 한 번으로 다양한 점심 메뉴 중에서 무작위로 하나를 추천받을 수 있습니다. 타입스크립트를 지원하며, Node.js 및 브라우저 환경뿐만 아니라 SSR(Server-Side Rendering)이나 RSC(React Server Components)에서도 문제없이 구동됩니다.

## 기능

- 다양한 점심 메뉴 중 무작위로 하나를 추천합니다.
- 카테고리별로 메뉴를 추천할 수 있습니다.
- 먹고싶지 않은 카테고리를 제외하고 추천받을 수 있습니다.
- 타입스크립트 지원
- Node.js 및 브라우저 환경에서 구동 가능
- SSR(Server-Side Rendering) 및 RSC(React Server Components) 지원

## 설치 방법

npm을 사용하여 설치할 수 있습니다:

```bash
npm install jeom-mae-chu
```

또는 yarn을 사용하여 설치할 수 있습니다:

```bash
yarn add jeom-mae-chu
```

## 사용 방법

### Node.js 환경

```typescript
import getJeomshim from 'jeom-mae-chu';

const menu = getJeomshim();
console.log(`오늘의 점심 메뉴는 ${menu}입니다.`); // 오늘의 점심 메뉴는 고추장찌개입니다.
```

### 브라우저 환경

```html
<script src=""></script>
<script>
  const menu = getJeomshim();
  console.log(`오늘의 점심 메뉴는 ${menu}입니다.`); // 오늘의 점심 메뉴는 꿔바로우입니다.
</script>
```

### SSR(Server-Side Rendering) 및 RSC(React Server Components) 환경

```typescript
import getJeomshim from 'jeom-mae-chu';

export default function MyComponent() {
  const menu = getJeomshim();
  return <div>오늘의 점심 메뉴는 {menu}입니다.</div>; // 오늘의 점심 메뉴는 시소 마끼입니다.
}
```

## 옵션

### 특정 카테고리에 따른 메뉴 추천

```typescript
import getJeomshim from 'jeom-mae-chu';

const menu = getJeomshim({ include: '한식' });
console.log(`오늘의 한식 메뉴는 ${menu}입니다.`); // 오늘의 한식 메뉴는 매운탕입니다.
```

### 복수 카테고리에 따른 메뉴 추천

```typescript
import getJeomshim from 'jeom-mae-chu';

const menu = getJeomshim({ include: ['한식', '중식'] });
console.log(`오늘의 한식 또는 중식 메뉴는 ${menu}입니다.`); // 오늘의 한식 또는 중식 메뉴는 불낙전골입니다.
```

### 제외할 카테고리 설정

```typescript
import getJeomshim from 'jeom-mae-chu';

const menu = getJeomshim({ exclude: ['한식'] });
console.log(`오늘의 한식을 제외한 메뉴는 ${menu}입니다.`); // 오늘의 한식을 제외한 메뉴는 똥얌꿍입니다.
```

## 카테고리

- [x] 한식
- [x] 중식
- [x] 일식
- [x] 양식
- [x] 베트남 음식
- [ ] 태국 음식
- [ ] 분식
- [ ] 패스트푸드
- [ ] 디저트
- [ ] 카페
- [ ] 술집

## 라이센스

MIT

## 기여

이 프로젝트에 기여하고 싶으신 분들은 이슈를 작성하거나 풀 리퀘스트를 보내주세요.
