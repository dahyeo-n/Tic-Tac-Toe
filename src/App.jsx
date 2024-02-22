// 일단 해야 할 걸 적어보자...
// 1. 게임판 UI 구성
// 2. 번갈아가며 클릭
// 3. 셀 클릭 => 기호 X or O 표시
// 4. 상태관리: 현재 플레이어가 누군지,
// 게임판이 얼마나 점유됐는지 등
// 5. 수평, 수직, 대각선 3개 => 빙고

// 6. 승자 나오면 바로 return
// if (player1 === won || player2 === won) {
//     return;
//     alert('A 플레이어님이 승리하셨습니다.');
// }

// 7. message: "A 플레이어님이 승리하셨습니다."

// 어케 하냐 이거
// 그림을 그려보자...

function App() {
    return (
        <>
            <h2>Tic Tac Toe 게임판</h2>
        </>
    );
}

export default App;
