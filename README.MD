npm init
## package.json 파일생성

npm i -y
## package-lock.json 파일생성

npm i parcel-bundler -D
## 개발서버 패키지 설치



## GIT------------------------------------------

git init
## 현재파일 관리 선언

git status
## 관리 현황보기


git add .
git commit -m '22-03-10'
## 스테이스 추가, 커밋(메세지)

git log 
## git commit 확인


git remote add origin 깃주소
git push origin master
## git연결 및 push



## lodash --------------------------------------
npm i lodash
npm init
## package.json 파일생성

## json & parcel-bundler -D -----------------------
npm i -y
## package-lock.json 파일생성

npm i parcel-bundler -D
## 개발서버 패키지 설치



## parcel-bundler -D 문제발생-----------------------
npm i parcel-bundler@1.12.3 -D
## 문제시 parcel bundler 버전 다운하기










## typescript ------------------------------------






###### 명령어 ######
## -------타입스크립트 컴파일러를 글로벌로 설치 후, ----##
## 비선호

npm i typescript -g
## 글로벌 버전으로 타입스크립트 설치

nano.test.ts
## nano => 생성명령어, nano뒤에 파일명을 작성한다.

tsc test.ts
## tsc => 컴파일 명령어, tsc뒤에 파일명을 작성한다.

mkdir tcs-project
## mkdir => 프로젝트 생성 명령어, mkdir뒤에 프로젝트명을 작성한다.

cd tcs-project
## 해당폴더로 이동

tsc --init
## 컴파일 설정파일 생성

ls
## 전체목록확인

tsc
## 컴파일러 실행

tsc -w
## 파일이 수정될때마다 새롭게 컴파일됨 watching mode

## ---------------글로벌 버전 삭제 ----------------##

npm uninstall typescript -g
## 글로벌 버전 삭제

rm -rf tsc-project
## 프로젝트 삭제









## ------- 프로젝트에 타입스크립트 컴파일러를 설치 후(글로벌X) ------##

mkdir tsc-project
## tsc-project 프로젝트생성

cd tsc-project
## 해당 폴더이동

npm i typescript
## 타입스크립트 설치

cat package.json
## json설치

ls node_modules
## node_modules로 이동하여 typescript 확인

ls -al node_modules/.bin
## ./bin 파일 확인

npx tsc --init
## tsconfig.json 만들기

nano test.ts
## nano => 생성명령어, nano뒤에 파일명을 작성한다.

npx tsc
## 컴파일

ls
## 목록확인

npx tsc -w
## watch mode(변경시 자동 컴파일)


nano package.json
## package.json 열기

npm run build
## package.json에서 "build":"tsc"로 수정한뒤
## npm run build 해주면 tsc가 실행됨


## 응용: 컴파일자동화
npm rum build:watch


##########################################
:: 타입스크립트 컴파일러 ::
- VS Code에 컴파일러가 내장되어 있다.
- 내장된 컴파일러 버전은 VS Code가 업데이트 되면서 올라간다.
    - 그래서 컴파일러 버전과 VS Code의 버전은 상관 관계가 있다.
- 내장된 컴파일러를 선택할수 있고, 직접 설치한 컴파일러를 선택할 수도 있다. 




## VS CODE 타입스크립트-------------------------------------

code .
## VS CODE 프로그램 실행
