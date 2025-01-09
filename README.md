# Compare build file size
- 함수를 export 하는 방식에 따라 트리쉐이킹의 효과가 달라질 수 있습니다.
- 일반적으로, named export를 사용하는 경우 사용되지 않는 함수는 트리쉐이킹 되어 최종 빌드 파일에서 제외될 가능성이 높습니다.
- 반면, default export는 트리쉐이킹이 제한될 수 있으므로 전체 모듈이 포함될 가능성이 있습니다.
- provide와 inject를 사용하는 경우에는 트리쉐이킹보다는 Vue의 의존성 주입 메커니즘에 의해 필요하지 않은 의존성도 포함될 수 있다고 합니다.
- 실제 테스트했을 때도 "빌드 파일 사이즈가 다른지 확인"해봅니다.

<br/>

### 1. 빌드 파일 사이즈 비교
> utils 파일을 (1) provide, inject하는 경우, (2) default export하는 경우, (3) named export하는 경우에 따라 빌드 파일 사이즈를 비교


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

### 2. 유틸에 함수 하나 추가했을 때 빌드 사이즈 변화 비교
> `util51()`를 `/utils.ts`에 추가하고 빌드 했을 때, 빌드 파일 사이즈 변화를 비교
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

<br/>

### 2. 의존성 그래프 비교
