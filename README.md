# 🍽 Foodies – Next.js & React 실습 프로젝트

이 프로젝트는 **Udemy – Next.js & React (강사: Maximilian Schwarzmüller)** 강의를 기반으로 한
**음식 레시피 공유 커뮤니티 실습 프로젝트**입니다.

Next.js(App Router 기반)와 React의 핵심 개념을 학습하고,
로컬 개발 환경 구성부터 데이터 처리까지 직접 실습하는 것을 목표로 합니다.

---

## 🚀 기술 스택

### Frontend

* **Next.js** 16.1.1
* **React** 19.2.3
* **React DOM** 19.2.3

### Backend / Utilities

* **better-sqlite3** – 로컬 SQLite 데이터베이스 처리
* **slugify** – URL 친화적인 slug 생성
* **xss** – 사용자 입력값 보안 처리 (XSS 방지)

### Development Tools

* **ESLint** 8
* **eslint-config-next** 14.0.3

---

## 📦 프로젝트 스크립트

```bash
npm run dev
```

* 개발 서버 실행 (기본 포트: `http://localhost:3000`)

```bash
npm run build
```

* 프로덕션 빌드 생성

```bash
npm run start
```

* 빌드된 결과를 프로덕션 모드로 실행

```bash
npm run lint
```

* ESLint를 이용한 코드 스타일 및 오류 검사

---

## 🛠 개발 환경

* **OS**: macOS (Apple Silicon 기준)
* **Shell**: zsh
* **Node.js**: v20
* **Package Manager**: npm
* **Tooling**: Homebrew, nvm

---

## 🟢 Node.js & npm 설정

### Node.js 설치 (v20)

```bash
brew install node@20
```

설치 확인:

```bash
node -v
npm -v
```

---

## 🔁 nvm (Node Version Manager)

```bash
brew install nvm
```

환경 변수 설정:

```bash
export NVM_DIR="$HOME/.nvm"
[ -s "/opt/homebrew/opt/nvm/nvm.sh" ] && \. "/opt/homebrew/opt/nvm/nvm.sh"
[ -s "/opt/homebrew/opt/nvm/etc/bash_completion.d/nvm" ] && \. "/opt/homebrew/opt/nvm/etc/bash_completion.d/nvm"
```

---

## 📥 프로젝트 실행 방법

### 1. 의존성 설치

```bash
npm install
```

### 2. 개발 서버 실행

```bash
npm run dev
```

브라우저에서 접속:

```
http://localhost:3000
```

---

## 🗄 초기 데이터베이스 설정 (강의 실습용)

```bash
node initdb.js
```

* 강의 실습을 위한 **초기 레시피 데이터**를 SQLite DB에 생성합니다.
* 최초 1회만 실행하면 됩니다.

---

## 📌 참고 사항

* 본 프로젝트는 **학습 목적**의 실습 코드입니다.
* 최신 **React 19 + Next 16** 조합을 사용하고 있어,
  일부 API는 이전 Next.js 버전과 다를 수 있습니다.

