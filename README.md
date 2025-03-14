# Compare build file size
- 함수를 export 하는 방식에 따라 트리쉐이킹의 효과가 달라질 수 있습니다.
- 일반적으로 `named export`를 사용하면 사용하지 않는 함수가 빌드에서 제외되어 최종 번들 크기를 줄일 수 있지만, `default export`인 경우 모듈 전체가 포함될 가능성이 높아 트리쉐이킹이 제한될 수 있습니다.
- 또한 Vue의 `provide`와 `inject`를 사용하는 경우, 의존성 주입 메커니즘으로 인해 필요하지 않은 의존성까지 포함될 수 있어 불필요한 코드가 빌드 파일에 남을 위험이 있습니다.
- 결국 빌드 파일 크기가 커지면 페이지 로딩 시간이 늘어나고 코드 최적화가 어려워진다는데...
- 실제로 (1) provide/inject, (2) default export, (3) named export를 사용했을 때 빌드 결과물의 크기와 의존성 관계가 다른지 확인해봅니다..!

<br/>

## 1. 빌드 파일 사이즈가 다를까?
### 1) 빌드 후 파일 크기 비교
- utils 파일을 (1) provide, inject하는 경우, (2) default export하는 경우, (3) named export하는 경우에 따라 빌드 파일 사이즈를 비교합니다.


||(1) provide, inject하는 경우|(2) default export하는 경우|(3) named export하는 경우|
|---|---|---|---|
|브렌치|<a href="https://github.com/KumJungMin/inject-import-bundling-test/blob/provide-inject-bundling-test/src/main.ts">test branch</a>|<a href="https://github.com/KumJungMin/inject-import-bundling-test/blob/export-default/src/utils/index.ts">test branch</a>|<a href="https://github.com/KumJungMin/inject-import-bundling-test/blob/named-import/src/utils/index.ts">test branch</a>|
|빌드 결과|<img src="https://github.com/KumJungMin/inject-import-bundling-test/blob/main/public/provide-inject.png" />|<img src="https://github.com/KumJungMin/inject-import-bundling-test/blob/main/public/export-default.png" />|<img src="https://github.com/KumJungMin/inject-import-bundling-test/blob/main/public/named-export.png" />|
|빌드 파일 크기|95.58KB|94.26KB|89.23KB|

```js
/* 파일 크기 비교 */

provide, inject 방식 > default export 방식 > named export 방식

```


<br/>

### 2) 유틸에 함수 하나 추가했을 때 빌드 사이즈 변화 비교
- `util51()`를 `/utils.ts`에 추가하고 빌드 했을 때, 빌드 파일 사이즈 변화를 비교합니다.
```ts
function util51() { 
  let a = 50; 
  let b = a + 50; 
  let c = b + 50; 
  let d = c + 50; 
  let e = d + 50; 
  let f = e + 50; 
  let g = f + 50; 
  let h = g + 50; 
  let i = h + 50; 
  return i; 
}
```

||(1) provide, inject하는 경우|(2) default export하는 경우|(3) named export하는 경우|
|---|---|---|---|
|추가 전|<img src="https://github.com/KumJungMin/inject-import-bundling-test/blob/main/public/provide-inject.png" />|<img src="https://github.com/KumJungMin/inject-import-bundling-test/blob/main/public/export-default.png" />|<img src="https://github.com/KumJungMin/inject-import-bundling-test/blob/main/public/named-export.png" />|
|추가 후|<img src="https://github.com/KumJungMin/inject-import-bundling-test/blob/main/public/provide-inject-expand.png" />|<img src="https://github.com/KumJungMin/inject-import-bundling-test/blob/main/public/export-default-expand.png" />|<img src="https://github.com/KumJungMin/inject-import-bundling-test/blob/main/public/named-export-expand.png" />|
|크기 변화|95.58KB -> 95.64KB (_0.063% 증가_)|94.26KB -> 94.32KB (_0.064% 증가_)|89.23KB -> 89.23KB (_같음_)|


```js
/* 함수 하나 추가시, 빌드 사이즈 변화 정도 비교 */

default export 방식 > provide, inject 방식  > named export 방식

```

<br/><br/><br/>

## 2. 모듈 간 의존성 관계가 다를까?
- 시각화 도구([rollup-plugin-visualizer](https://github.com/btd/rollup-plugin-visualizer))에서 보이는 트리맵(_하위 이미지들_)은 **최종 번들로 묶인 파일들을 어떻게 구성(모듈 간 의존 관계)하고 있는지**를 한눈에 보여줍니다.
- 트리맵에서 사각형의 크기와 위치는 대략적으로 파일 사이즈, 번들 내 비중, 의존성 연결 정도 등에 의해 결정됩니다.
- 사각형 크기가 크다는 건 **파일 크기가 실제로 크거나**, **많은 컴포넌트들이 참조하여 번들 내 비중이 높기 때문**이라고 볼 수 있습니다.

<br/>

### 1) provide, inject하는 경우
#### (1) 방식
- 루트(또는 상위 컴포넌트)에서 utils 전체를 provide로 주입합니다.
- 다수의 하위 컴포넌트가 inject 받아 사용하는 방식입니다.

#### (2) 트리맵 해석
- utils/index.ts(또는 유틸 파일)가 번들 내 큰 사각형을 차지합니다.
- `TestXX.vue` 컴포넌트들(오른쪽 여러 사각형)이 utils를 의존하고 있습니다.
- `provide` 방식이지만 실제로는 utils/index.ts 전체를 import하여 주입하므로, 미사용 함수도 모두 번들에 포함될 가능성이 큽니다.
- 트리쉐이킹이 적게 일어나서 최종 사이즈가 크게 보일 수 있습니다.
  
<img src="https://github.com/KumJungMin/inject-import-bundling-test/blob/main/public/provide-inject-dependecies.png" />


<br/>


### 2) default export하는 경우
#### (1) 방식
- utils/index.ts에서 `export default { ... }` 형태로 모든 함수를 한 객체에 담아 제공합니다.
- 각 컴포넌트가 `import utils from '...'` 형태로 전체 객체를 가져와 사용하는 방식입니다.

#### (2) 트리맵 해석
- 마찬가지로 utils/index.ts가 크게 표시되며, 많은 컴포넌트가 이 하나의 “디폴트 객체”에 의존합니다.
- 번들러 입장에서는 객체 안의 특정 프로퍼티만 사용해도 전체를 번들에 포함시킬 가능성이 큽니다.
- 제공하지 않는 함수까지 함께 포함될 확률이 크므로, 결국 트리쉐이킹 효과가 제한적입니다.
 
<img src="https://github.com/KumJungMin/inject-import-bundling-test/blob/main/public/export-default-dependecies.png" />



<br/>


### 3) named export하는 경우
#### (1) 방식
- utils/index.ts에서 함수를 개별 `export (예: export function a() {}, export function b() {}, …)` 합니다.
- 각 컴포넌트는 필요한 함수만 import { a } from '...' 하는 방식입니다.

#### (2) 트리맵 해석
- utils/index.ts가 여러 개의 named export를 가지고 있어도, 실제로 쓰이지 않는 함수는 최종 번들에서 제거(Tree Shaking)될 가능성이 커집니다.
- 따라서 시각화를 보면 utils/index.ts가 상대적으로 작게 표시되거나 또는 “사용된 함수만” 번들에 포함되어, 각 컴포넌트와의 의존성이 간결하게 드러납니다.

<img src="https://github.com/KumJungMin/inject-import-bundling-test/blob/main/public/named-export-dependecies.png" />



<br/>

### 4) 결론
- 시각화에서 utils/index.ts가 크게 보이고, 많은 컴포넌트가 연결되어 있다면, `Provide/Inject` 방식이든 `Default Export` 방식이든, 결과적으로 유틸 파일 전체가 번들에 포함되기 쉽습니다.
- `Named Export`를 사용하고, 각 컴포넌트에서 정말 필요한 함수만 import하면, Tree Shaking을 통해 미사용 함수들이 번들에서 제외될 가능성이 높아집니다.

```js
/* util 파일과의 의존성 */

유틸에 대한 의존성이 큼: default export 방식, provide, inject 방식

유틸에 의존성이 작아질 수 있음: named export 방식

```

<br/>
  
