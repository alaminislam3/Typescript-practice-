// 3rd piller of oop
// idea = > implementation pore korbo

/* 1. Interface
  2. abstract class
*/

// idea

interface MediaPlayer {
  play(): void;
  pause(): void;
  stop(): void;
}

// implementation
class MusicPlayer implements MediaPlayer {
  play() {
    console.log("music is playing ");
  }
  pause() {
    console.log("music is paused");
  }
  stop() {
    console.log("stopped");
  }
}

const newPlayer = new MusicPlayer(); /* Instance  */
newPlayer.play();

// const NewPlayer = new MusicPlayer()
// NewPlayer.play()

abstract class NewMediaPlayer {
  abstract play(): void;
  abstract pause(): void;
  abstract stop(): void;
}

class AlaminPlayer extends NewMediaPlayer{
    play() {
        console.log("playing...")
    }
    pause() {
        console.log("paused")
    }
    stop() {
        console.log("stoped")
    }
}

const veryNewPlayer = new AlaminPlayer()
veryNewPlayer.stop() 





