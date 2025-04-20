import { useRef, useState } from "react";
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
    coverUrl: "/burningheart.jpg",
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

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  //true 再生中　false 停止中
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const currentSong = songs[currentSongIndex];

  const handlePrevious = () => {
    // 現在の曲の一個前のインデックスを取得 最終的に全体の長さで割ったときの余りを出す。
    setCurrentSongIndex(
      (prevIndex) => (prevIndex - 1 + songs.length) % songs.length
    );
    setIsPlaying(false);
  };

  const handleNext = () => {
    setCurrentSongIndex(
      (prevIndex) => (prevIndex + 1 + songs.length) % songs.length
    );
    setIsPlaying(false);
  }

  const togglePlayPause = () => {
    if (!audioRef.current) return;
    //isPlayingはboolean型の変数
    if (isPlaying) {
      //再生中の場合停止
      audioRef.current.pause();
    } else {
      //停止中の場合再生
      audioRef.current.play();
    }
    //反転させる。
    setIsPlaying(!isPlaying);
  };
  return (
    <>
      <div>
        <div>
          <img src={currentSong.coverUrl} alt="cover" style={{ width: "300px" ,height: "300px"}}/>
        </div>
        <div>
          {/* jsxでは{}の中にJSを入れることができる */}
          <h2>{currentSong.title}</h2>
          <p>{currentSong.artist}</p>
          </div>
          <div>
          <button onClick={handlePrevious}>戻る</button>
          <button onClick={togglePlayPause}>
            {isPlaying ? "一時停止" : "再生"}
          </button>
            <button onClick={handleNext}>次へ</button>
        </div>
        <audio ref={audioRef} src={currentSong.musicUrl} onEnded={handleNext} />
        </div>
    </>
  );
}

  export default App;
