# 점심메뉴 추천 라이브러리

이 라이브러리는 매일 점심시간마다 무엇을 먹을지 고민하는 분들을 위해 개발되었습니다. 간단하게 함수 호출 한 번으로 다양한 점심 메뉴 중에서 무작위로 하나를 추천받을 수 있습니다. 타입스크립트를 지원하며, Node.js 및 브라우저 환경뿐만 아니라 SSR(Server-Side Rendering)이나 RSC(React Server Components)에서도 문제없이 구동됩니다.

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
console.log(`오늘의 점심 메뉴는 ${menu}입니다.`);
```

### 브라우저 환경

```html
<script src=""></script>
<script>
  const menu = getJeomshim();
  console.log(`오늘의 점심 메뉴는 ${menu}입니다.`);
</script>
```

### SSR(Server-Side Rendering) 및 RSC(React Server Components) 환경

```typescript
import getJeomshim from 'jeom-mae-chu';

export default function MyComponent() {
  const menu = getJeomshim();
  return <div>오늘의 점심 메뉴는 {menu}입니다.</div>;
}
```

## 기여

이 프로젝트에 기여하고 싶으신 분들은 이슈를 작성하거나 풀 리퀘스트를 보내주세요.
