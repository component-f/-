# Component Factory

## 소개

이 프로젝트는 다양한 UI 컴포넌트를 제공하는 라이브러리입니다.

## 프로젝트 목적

프론트엔드 개발 시 반복적으로 사용하는 기본 컴포넌트(Button, Dropdown, Modal, Textarea 등)를 일일이 만드는 것은 시간 소모적이고 비효율적입니다.
Component Factory는 이러한 반복적인 작업을 최소화하고, 간편한 UI와 유연한 커스터마이징을 통해 개발 효율을 극대화하는 것을 목표로 합니다.
이를 통해 개발자는 디자인이나 기능을 일일이 구현할 필요 없이, 바로 사용할 수 있는 컴포넌트를 통해 빠르고 효율적인 개발을 할 수 있습니다.

## 기능 목록

- **심플한 기본 UI**: 직관적이고 간단한 UI제공.
- **유연한 커스터마이징 가능**: 필요에 따라 디자인을 쉽게 수정 가능.
- **간단한 사용**: 복잡한 설정 없이 간단하게 사용.
- **빠른 학습**: 웹사이트에서 코드 편집을 통해 빠르게 학습 가능.

## 설치 방법

```bash
npm install @cyweyo/component-factory
```

npm을 통해 component-factory를 설치해주세요.

## 사용법(<Textarea />)

다음은 Textarea 컴포넌트를 사용하는 예시입니다:

```jsx
import { Textarea } from '@cyweyo/component-factory';

const TextareaExample: React.Fc = () => {
  return (
    <Textarea
      placeholder="Type your message here..."
      className="w-[350px]"
      maxLength={50}
      counterClassName="text-blue-400"
    />
  );
}
export default TextareaExample;
```

위 코드에서는 Textarea 컴포넌트를 사용하여 최대 50자까지 입력할 수 있는 입력창을 만들었습니다.
클래스(className)를 이용해 스타일을 지정하고, 글자수 카운터는 counterClassName으로 스타일을 변경할 수 있습니다.

### Textarea props

| Prop               | Type     | Description                                  | Default |
| ------------------ | -------- | -------------------------------------------- | ------- |
| `placeholder`      | `string` | 입력창에 표시될 플레이스홀더 텍스트          | -       |
| `className`        | `string` | 추가적인 TailwindCSS 클래스를 지정할 수 있음 | -       |
| `maxLength`        | `number` | 입력 가능한 최대 글자 수                     | -       |
| `counterClassName` | `string` | 글자 수 카운터의 스타일 지정                 | -       |

## 사용법(<Button />)

```jsx
import { Button } from '@cyweyo/component-factory';

const ButtonExample: React.FC = () => {
  return (
    <div className="flex space-x-2">
      <Button variant="text"> Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
      <Button disabled>Disabled</Button>
    </div>
  )
}
export default ButtonExample;
```

위 코드에서는 Button 컴포넌트를 다양한 형태로 사용한 예시입니다.

- Text: 텍스트 형태의 버튼을 표시합니다.
- Contained: 배경색이 있는 기본 버튼입니다.
- Outlined: 테두리만 있는 버튼으로, 비어 있는 스타일을 제공합니다.
- Disabled: 비활성화된 버튼으로 클릭할 수 없습니다.

### Button props

| Prop        | Type                                  | Description                                | Default  |
| ----------- | ------------------------------------- | ------------------------------------------ | -------- |
| `variant`   | `'text' \| 'contained' \| 'outlined'` | 버튼의 스타일 변형을 지정합니다.           | `'text'` |
| `startIcon` | `React.ReactNode`                     | 버튼의 시작 부분에 표시될 아이콘입니다.    | `-`      |
| `endIcon`   | `React.ReactNode`                     | 버튼의 끝 부분에 표시될 아이콘입니다.      | `-`      |
| `children`  | `React.ReactNode`                     | 버튼 내부에 표시될 텍스트 또는 요소입니다. | `-`      |
| `className` | `string`                              | 추가적인 CSS 스타일을 적용할 수 있습니다.  | `-`      |

## 기술 스택

1. **React** - 사용자 인터페이스 개발
2. **Next.js** - 서버사이드 렌더링 및 정적 사이트 생성 프레임워크
3. **TypeScript** - 자바스크립트에 타입 시스템을 도입하여 타입 안전성을 제공
4. **Tailwind CSS** - 유틸리티 퍼스트 CSS 프레임워크
5. **Zustand** - 경량 상태 관리 라이브러리로, 컴포넌트 간의 상태 공유와 UI 반응성을 쉽게 처리
6. **Axios** - Unsplash API와의 비동기 데이터 통신을 위해 사용
7. **Babel** - 최신 자바스크립트 문법 변환기
8. **PrismJS** - 코드 하이라이팅 라이브러리
9. **ESLint** - 코드 품질 분석 및 오류 검출
10. **Prettier** - 코드 포맷터
11. **Husky** - Git 훅 관리

## 배포주소

[Component-Factory] (https://www.component-factory.org)

## 사용 가이드

Component Factory는 다양한 컴포넌트 예제와 실시간 코드 편집 기능을 제공하여, 사용자가 쉽게 이해하고 활용할 수 있도록 돕습니다. 사이트에서 제공하는 **docs 페이지**의 **components 항목**에서, 각 컴포넌트의 사용 예시와 더불어 **실시간 코드 에디터**를 활용하여 직접 코드를 수정하고 결과를 확인할 수 있습니다.

### 1. **컴포넌트 탐색**

- **Docs 페이지**의 **Components 항목**에서 다양한 UI 컴포넌트의 예시를 찾아볼 수 있습니다.
- 각 컴포넌트는 기본 예제와 함께 표시되며, 이를 통해 사용법을 쉽게 익힐 수 있습니다.
- 상단의 **검색 버튼**을 사용하여 원하는 컴포넌트를 빠르게 탐색할 수 있습니다.

### 2. **실시간 코드 편집**

- 각 컴포넌트 예시는 **코드 에디터**와 연동되어 있어, 사용자가 코드를 직접 수정하고 결과를 즉시 확인할 수 있습니다.
- 코드를 수정하면, 변경된 내용이 화면에 실시간으로 반영되어, 다양한 설정을 즉시 시도해볼 수 있습니다.

### 3. **사용 예시**

- 예를 들어, **Button 컴포넌트**를 선택하면 기본 텍스트, Contained, Outlined, Disabled 등의 버튼 스타일을 제공하며, 사용자가 코드를 수정하여 직접 버튼 스타일을 커스터마이징할 수 있습니다.

#### 코드 편집 예시:

```jsx
<Button />
```

- 위 코드를 코드에디터에서 아래와 같이 수정하면,

```jsx
<Button variant="contained" className="bg-blue-500">
  Submit
</Button>
```

- 즉시 반영된 결과를 확인할 수 있습니다.

### 4. **컴포넌트 설명 및 옵션**

- 각 컴포넌트의 Props 테이블을 통해, 컴포넌트가 지원하는 모든 옵션과 속성을 확인할 수 있습니다.
- 이를 통해 컴포넌트를 프로젝트에 최적화하여 적용할 수 있습니다.

## 팀원 소개

| 이름   | 역할 | 기여 내용                                                                                                                                    | GitHub 링크                           |
| ------ | ---- | -------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------- |
| 문수민 | 팀장 | 프로젝트 초기 세팅 및 구조 설계, UI/UX 디자인, 헤더, 컴포넌트(Input, Label, Modal, Toast), 404페이지, examples 페이지, live colors 테마 적용 | [GitHub](https://github.com/BEARSUM)  |
| 이인지 | 팀원 | 컴포넌트(Accordion, Avatar, Button, Switch), 검색, 사이드바, 푸터 구현                                                                       | [GitHub](https://github.com/inji0212) |
| 이상미 | 팀원 | 컴포넌트(Radio, Checkbox, Select, Table) 개발                                                                                                | [GitHub](https://github.com/lsm0323)  |
| 최영웅 | 팀원 | 컴포넌트(Alert, Breadcrumb, Dropdown, Pagination, Sheet, Skeleton, Textarea), 컴포넌트 페이지 작성                                           | [GitHub](https://github.com/cyweyo)   |

### 팀원별 기여

- **문수민**: 프로젝트 초기 세팅 및 구조 설계를 담당하고, UI/UX 디자인을 통해 프로젝트의 전반적인 비주얼을 구축했습니다. 주요 컴포넌트(Input, Label, Modal, Toast) 개발 및 404페이지와 examples 페이지 구현에 기여했으며, live colors 테마를 적용했습니다.
- **이인지**: Accordion, Avatar, Button, Switch 컴포넌트를 개발했으며, 검색 기능과 사이드바, 푸터 등을 설계하고 구현하는 데 기여했습니다.
- **이상미**: Radio, Checkbox, Select, Table 컴포넌트를 개발하고, 폼 요소 관련 기능을 개선하는 데 기여했습니다.
- **최영웅**: Alert, Breadcrumb, Dropdown, Pagination, Sheet, Skeleton, Textarea 등 다양한 UI 컴포넌트를 설계하고 구현했으며, 소개, 설치, 컴포넌트 페이지 작성에 기여했습니다.
