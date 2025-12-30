# next-react

이 프로젝트는 **Udemy – Next.js & React (강사 Maximilian Schwarzmüller)** 강의를 기반으로 한 실습용 맛집 공유 커뮤니티 프로젝트입니다.
Next.js와 React의 기본 구조를 이해하고, 로컬 개발 환경을 직접 구성하는 것을 목표로 합니다.

---

## 🛠 개발 환경

* **OS**: macOS (Apple Silicon 기준)
* **Shell**: zsh (macOS Catalina 이후 기본 쉘)
* **Node.js**: v20
* **Package Manager**: npm
* **Tool**: Homebrew, nvm

---

## 📦 Homebrew 설치

Homebrew는 macOS용 패키지 관리자입니다.

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

### Homebrew 환경 변수 설정

```bash
echo >> /Users/sun/.zprofile
echo 'eval "$(/opt/homebrew/bin/brew shellenv)"' >> /Users/sun/.zprofile
eval "$(/opt/homebrew/bin/brew shellenv)"
```

### 설치 확인

```bash
brew -v
```

---

## 🐚 Shell 정보

* macOS Catalina부터 기본 쉘은 **zsh**
* 현재 설치된 모든 쉘 확인

```bash
cat /etc/shells
```

---

## 🟢 Node.js 설치 (v20)

```bash
brew install node@20
```

### Node 환경 변수 설정

```bash
export PATH="/opt/homebrew/opt/node@20/bin:$PATH"
export LDFLAGS="-L/opt/homebrew/opt/node@20/lib"
export CPPFLAGS="-I/opt/homebrew/opt/node@20/include"
```

### 설치 확인

```bash
node -v
```

---

## 🔁 nvm (Node Version Manager) 설치

```bash
brew install nvm
```

### nvm 환경 변수 설정

```bash
export NVM_DIR="$HOME/.nvm"
[ -s "/opt/homebrew/opt/nvm/nvm.sh" ] && \. "/opt/homebrew/opt/nvm/nvm.sh"
[ -s "/opt/homebrew/opt/nvm/etc/bash_completion.d/nvm" ] && \. "/opt/homebrew/opt/nvm/etc/bash_completion.d/nvm"
```

### 설치 확인

```bash
nvm -v
```

---

## 📦 npm 확인

```bash
npm -v
```

---

## 🚀 프로젝트 실행 방법

### 1. 패키지 설치

```bash
npm install
```

### 2. 개발 서버 실행

```bash
npm run dev
```

브라우저에서 아래 주소로 접속합니다.

```
http://localhost:3000
```

---

## 🗄 초기 데이터베이스 설정 (강의 실습용)

```bash
node initdb.js
```

해당 스크립트는 강의 실습을 위한 초기 데이터 세팅용입니다.

