const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const path = require('path'); // 경로 모듈 불러오기
//http://localhost:3000
// 정적 파일 제공 (index.html) 
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});


app.use(express.static(__dirname));
// 서버 시작
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});