## 교강사 피드백

1. 필요한 컬럼(속성)들이 댓글의 의미에 맞게 제대로 정의되었는가? (10점)

피드백: 없음

2. 각 컬럼(속성)의 데이터 타입이 적절하게 설정되었는가? (10점)

피드백: 없음

3. Express를 사용하여 서버를 구축했는가? (10점)

피드백 : 없음

4. 디렉토리를 잘 구분했는가? (10점)

## 현재 디렉토리 구조

```
250108_monthTest3_Taejung
├─ .gitignore
├─ monthTest3.md
├─ package.json
├─ public
│  └─ css
│     └─ index.css
├─ README.md
└─ src
   ├─ app.js
   ├─ controllers
   │  └─ comment.control.js
   ├─ repositories
   │  ├─ comment.repository.js
   │  └─ db.js
   ├─ routes
   │  ├─ comment.route.js
   │  └─ index.js
   ├─ server.js
   ├─ services
   │  └─ comment.service.js
   ├─ utils
   │  └─ comment.utils.js
   └─ views
      └─ comment
         ├─ list.html
         └─ write.html

```

피드백: utils/comment.utils.js의 파일명을 함수명으로 변경하는게 어땠을까

이유: 사실 시간 함수 같은 경우에는 범용적으로 사용할 수 있기 때문에, 파일명을 함수명으로 변경하면 좋을 듯

피드백: 폴더 디렉토리를 src와 public으로 나뉜 점 => 사실 이러한 디렉토리 구조는, 리액트 디렉토리에서 많이 보이는 디렉토리 구조중 하나.  

그래서 피드백이라기 보다는, 좋은 의도를 가지고 구조를 설계한 점이 눈에 띔.

5. 모듈마다 요청을 처리하는 라우팅이 잘 구성되었는가? (10점)

피드백: 없음

6. 미들웨어를 사용하여 요청/응답 처리 및 예외 처리를 잘 수행했는가? (0점)

피드백: 미들웨어에 대한 디렉토리가 존재하지 않음.

7. 댓글 생성이 잘 구현했는가? (10점)

피드백: 없음

8. 댓글 조회를 잘 구현했는가? (10점)

피드백: 없음

9. 댓글 수정을 잘 구현했는가? (10점)

피드백: 없음

10. 댓글 삭제를 잘 구현했는가? (10점)

피드백: 없음

90점