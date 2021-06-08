
var 이미지좌표 = 0;

var dictionary = { // 딕셔너리 자료구조
    바위: '0',
    가위: '-142px',
    보: '-284px'
};

// object.entries 2차원 배열, find 반복문
//console.log(Object.entries(가위바위보));

function 컴퓨터의선택(이미지좌표) {
    return Object.entries(가위바위보).find(function(v){
        return v[1] === 이미지좌표;
    })[0];
}
var 찾기 = Object.entries(가위바위보).findIndex(function(v){
    console.log(v);
    return v[0] === '보';
});

var 인터벌 = setInterval(function () { // 0.1초마다 계속 실행
    if(이미지좌표 === dictionary.바위) {
        이미지좌표 = dictionary.가위;
    } else if(이미지좌표 === dictionary.가위) {
        이미지좌표 = dictionary.보;
    } else {
        이미지좌표 = dictionary.바위;
    }
    document.querySelector('#computer').style.background = 
    'url(http://en.pimg.jp/023/182/267/1/23182267.jpg) ' + 이미지좌표 + ' 0';
}, 100);


document.querySelectorAll('.btn').forEach(function(btn) {
        btn.addEventListener('click', function(){
            clearInterval(인터벌);
            setTimeout(function() {
                인터벌 = setInterval(function () { // 0.1초마다 계속 실행
                    if(이미지좌표 === dictionary.바위) {
                        이미지좌표 = dictionary.가위;
                    } else if(이미지좌표 === dictionary.가위) {
                        이미지좌표 = dictionary.보;
                    } else {
                        이미지좌표 = dictionary.바위;
                    }
                    document.querySelector('#computer').style.background = 
                    'url(http://en.pimg.jp/023/182/267/1/23182267.jpg) ' + 이미지좌표 + ' 0';
                }, 100);
            }, 1000);
            var 나의선택 = this.textContent;
            if(나의선택 === '가위') {
                if(컴퓨터의선택(이미지좌표) === '가위') {
                    console.log('비겼습니다.');
                } else if(컴퓨터의선택(이미지좌표) === '바위') {
                    console.log('졌습니다.');
                } else if(컴퓨터의선택(이미지좌표) === '보') {
                    console.log('이겼습니다.');
                }
            } else if(나의선택 === '바위') {
                if(컴퓨터의선택(이미지좌표) === '가위') {
                    console.log('이겼습니다.');
                } else if(컴퓨터의선택(이미지좌표) === '바위') {
                    console.log('비겼니다.');
                } else if(컴퓨터의선택(이미지좌표) === '보') {
                    console.log('졌습니다.');
                }
            } else if(나의선택 === '보') {
                if(컴퓨터의선택(이미지좌표) === '가위') {
                    console.log('졌습니다.');
                } else if(컴퓨터의선택(이미지좌표) === '바위') {
                    console.log('이겼니다.');
                } else if(컴퓨터의선택(이미지좌표) === '보') {
                    console.log('비겼습니다.');
                }
            }
        });
});

