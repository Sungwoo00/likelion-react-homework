# 쇼핑 카트 UI 구현
> 해당 과제는 **React**와 **TypeScript**를 사용한 쇼핑 카드 UI 구현 과제입니다.

<br>
<br>

## 요구 사항 및 완성 예시
| 반응형 레이아웃 | 총 금액 계산 |
|:---:|:---:|
| ![반응형 레이아웃](https://github.com/user-attachments/assets/6999ac00-1d9c-468e-89a8-e351b86506c9) | ![총 구매액 계산](https://github.com/user-attachments/assets/98a7d15a-8660-45c2-a7aa-7ef120818acc) |

<br>
<br>


## 결과물

![HW4 Cart](https://github.com/user-attachments/assets/4b6c7f34-7fdb-4b46-8525-771be3be1eb2)

<br>
<br>

## 컴포넌트 구조
![image](https://github.com/user-attachments/assets/d3e7d698-5545-4094-b0ca-6cdd93ac2157)

<br>
<br>

## 회고
> 이 과제에서는 **데이터 단방향 흐름**과 **컴포넌트의 상태 관리**를 중점으로 두고 코드를 구현했다. <br/>
 데이터는 **최상위 컴포넌트**부터 **하위 컴포넌트**로 **위**에서부터 **아래**로 흐르게 했다. <br/>
처음에는 `ProductItem` 컴포넌트에서 `totalPrice`를 통해 총 금액을 관리하게 했지만 `Cart` 컴포넌트로 상태를 끌어올려서 관리하니 더 편해졌다. <br/>
금요일에 살짝 배운 `useEffect`를 사용한다면 `ProductItem`에서 관리해도 됐을 것 같지만 조금 더 공부한 뒤에 다음 과제에서 사용하는 것이 좋을 것이라는 생각을 했다. <br/>
 마지막으로 `totalPrice` 밀접한 관련이 있는 `counts` 상태도 **Cart컴포넌트**로 끌어올리는 것도 좋았을 것 같다는 생각을 했다.

