import { Button } from "./components/ui/button"

const songs = [
  {
    id: "1",
    title: "シャイニングスター",
    artist: "詩歩",
    coverUrl: "/シャイニングスター.jpg",
    musicUrl: "/shining_star.mp3"
  },
  {
    id: "2",
    title: "Burnig Heart",
    artist: "KEI",
    coverUrl: "/burning_heart.jpg",
    musicUrl: "/burning_heart.mp3"
  },
  {
    id: "3",
    title: "12345",
    artist: "Mary",
    coverUrl: "/12345.jpg",
    musicUrl: "/12345.mp3"
  },
  {
    id: "4",
    title: "ハルジオン",
    artist: "KEI",
    coverUrl: "/ハルジオン.jpg",
    musicUrl: "/halzion.mp3"
  },
  {
    id: "5",
    title: "ヒカリトリガー",
    artist: "森田交一",
    coverUrl: "/ヒカリトリガー.jpg",
    musicUrl: "/hikari_trigger.mp3"
  }
];

function App() {

  let currentSong = songs[0];

  const handlePrevious = () => {
    currentSong = songs[4];
  };

  const handleNext = () => {
    currentSong = songs[1];
  };
  return (
    <>
      <div>
        <div>
          <img src={currentSong.coverUrl} alt="cover"/>
        </div>
        <div>
          {/* jsxでは{}の中にJSを入れることができる */}
          <h2>{currentSong.title}</h2>
          <p>{currentSong.artist}</p>
          </div>
          <div>
            <button onClick={handlePrevious}>戻る</button>
            <button onClick={handleNext}>次へ</button>
          </div>
        </div>
    </>
  );
}

export default App
