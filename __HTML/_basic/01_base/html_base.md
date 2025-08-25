# 🌱 HTML 기본 태그

## 📜 Tag List
|Tag Name|Description|
|---|---|
|`<html>`| HTML 문서의 루트(Root) 요소|
|`<head>`| 메타데이터 영역|
|`<body>`| 본문 영역|
|`<title>`| 문서 제목|
|`<style>`| 문서 내에 CSS 정의|
|`<script>`| JavaScript 코드 포함|
|`<link>`| 외부 CSS 파일 사용|
|`<meta>`| 사용자 정의 메타데이터
&nbsp;


## 📝 Detail

### __🧩 \<html\> 태그__
> #### __📖 Definition__
> - HTML의 최상위 태그이다. (HTML 문서의 시작이자 끝)
> - 모든 HTML 요소는 반드시 `<html>` 태그 내에 포함되어야 함.
> &nbsp;
> 
> #### __🔎 Example Code__
> ```html
> <html xmlns="http://www.w3.org/1999/xhtml" lang="ko">
>   <head>
>       <!-- head 영역 -->
>   </head>
>   <body>
>       <!-- body 영역 -->
>   </body>
> </html>
> ```
> 
> #### __🔤 Attribute__
> |Name|Description|
> |---|---|
> |`lang`| 문서의 기본 언어 설정 (예 : `lang="ko"`)
> 
> #### __⚠️ Caution__
> - .html 파일에 `<html>`을 2개 이상 정의할 수 없다.
> - `<html>`의 하위는 반드시 `<head>`, `<body>`만 들어가야 한다.
> - 기본 언어(lang)를 지정하지 않을 경우 OS에 설정된 언어로 자동 설정된다.

&nbsp;
### __🧩 \<head\> 태그__
> #### __📖 Definition__
> - 메타 데이터에 관련된 다양한 요소를 모아둔 태그
>   - 메타데이터 : 데이터에 대한 데이터 (구조화된 정보)
> - HTML에서 반드시 필요한 태그
> - 화면에서는 보이지 않는 영역에 속함
> 
> #### __🔎 Example Code__
> ```html
> <head>
>   <meta charset="utf-8">
>   <meta name="description" content="Test Website.">
>   <title>제목입니다.</title>
> </head>
> ```
> #### __⚠️ Caution__
> - `<html>` 내에서 해당 태그는 반드시 하나만 존재해야 한다.
> - 해당 태그 내에 `<title>` 태그가 반드시 포함되어야 한다.

&nbsp;
### __🧩 \<body\> 태그__
> #### __📖 Definition__
> - HTML 문서의 내용(Content)을 나타내는 태그
> - `<head>`와 마찬가지로 HTML 문서에서 반드시 필요한 태그
> - 화면에서 보이는 영역에 속함
> 
> #### __🔎 Example Code__
> ```html
> <body>
>   <div>Body 영역입니다.</div>
> </body>
> ```
> #### __⚠️ Caution__
> - `<html>` 내에서 해당 태그는 반드시 하나만 존재해야 한다.
> - 해당 태그 내에 `<title>` 태그가 반드시 포함되어야 한다.

&nbsp;
### __🧩 \<title\> 태그__
> #### __📖 Definition__
> - 문서의 제목을 나타내는 필수 태그
> - 브라우저의 `제목 표시줄` or `탭`에 보여짐
> - 검색엔진에서 제목이 노출되기 위해 필수로 사용됨
> 
> #### __🔎 Example Code__
> ```html
> <title>저의 웹사이트에요</title>
> ```
> 
> #### __⚠️ Caution__
> - 특별한 경우가 아니라면 반드시 `<head>` 태그 내에 정의해야 한다.
> - `<html>` 내에서 해당 태그는 반드시 하나만 존재해야 한다.
> - `<title>` 태그 내에 들어가는 요소들은 모두 Text로 인식됨. 
>   - `주석`이나 `태그`를 넣어도 텍스트로 인식함.

&nbsp;
### __🧩 \<style\> 태그__
 - 준비중

&nbsp;
### __🧩 \<script\> 태그__
 - 준비중

&nbsp;
### __🧩 \<link\> 태그__
 - 준비중

&nbsp;
### __🧩 \<meta\> 태그__
 - 준비중 

