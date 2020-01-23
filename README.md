# webBoard-server<br>

디시인사이드 갤러리를 클론한 single page application입니다.

# webBoard-server 기능 flow<br>
![Untitled](https://user-images.githubusercontent.com/48282648/72953974-39328b00-3dda-11ea-80f9-0f962ae98dd4.png)






# 기술 스택<br>
## Server-side<br>

- Node.js
- Express
- MySQL
- Sequelize



# 폴더 구조<br>
```js
📂 webBoard-server                                 - 서버 사이드 폴더
┃
┣📦config                                         - DB 연결 설정 폴더
┃ ┗ 📜config.js                                  - DB 연결 설정 파일
┃
┣ controllers                                     - 컨트롤러 폴더
┃ ┣ 📂comment                                    - 댓글 폴더
┃ ┃ ┣ 📜commentdetail.js                        - 댓글 삭제 API
┃ ┃ ┣ 📜comments.js                             - 댓글 등록 API
┃ ┃ ┗ 📜index.js          
┃ ┃
┃ ┣ 📂post - 게시물 폴더
┃ ┃ ┣ 📜index.js
┃ ┃ ┣ 📜postcomments.js                         - 댓글 요청 API
┃ ┃ ┣ 📜postdetail.js                           - 게시물 CURD API
┃ ┃ ┗ 📜posts.js                                - 게시물 요청
┃ ┃
┃ ┣ 📂search - 검색 폴더
┃ ┃ ┣ 📜index.js
┃ ┃ ┗ 📜search.js                               - 게시물 검색 API
┃ ┃
┃ ┗ 📜index.js
┃
┣ 📦migrations                                   - 마이그레이션 폴더
┃ ┣ 📜20200116044640-fix-db-charset.js          - DB charset 설정 파일
┃ ┣ 📜20200116044644-create-posts.js            - post 모델
┃ ┗ 📜20200118181409-create-comments.js         - comment 모델
┃
┣ 📦models                                       - DB 모델 정의 폴더
┃ ┣ 📜comments.js                               - comment 모델
┃ ┣ 📜index.js                                  - 시퀄라이즈 모델 메인 파일
┃ ┗ 📜posts.js                                  - post 모델
┃
┣ 📦routers                                      - 라우터 폴더
┃ ┣ 📜commentRouter.js                          - 댓글 라우터 파일
┃ ┣ 📜postRouter.js                             - 게시물 라우터 파일
┃ ┗ 📜searchRouter.js                           - 검색 라우터 파일
┃
┣ 📦seeders - DB 테스트를 위한 데이터 정의 폴더
┃ ┣ 📜20200118051605-postData.js                - post 모델 데이터
┃ ┣ 📜20200119122139-commentData.js             - comment 모델 데이터
┃ ┗ 📜20200122122149-commentData.js             - comment 모델 데이터
┃
┣.env_sample                                    - .env 샘플 파일
┣.gitignore                                     - .gitignore 설정 파일
┣.prettierrc                                    - .prettierrc 설정 파일
┣ README.md                                     -  리드미 파일
┣ app.js 
┣ package-lock.json
┣ package.json                                 - npm 설정
┣ routes.js                                    - 라우트 파일
┗ yarn.lock
```


# webBoard 데이터베이스 스키마
![Untitled](https://user-images.githubusercontent.com/48282648/72953717-60d52380-3dd9-11ea-8bef-a033287a8029.png)
