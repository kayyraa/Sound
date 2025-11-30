globalThis.Sound = class {
    constructor(Source = "") {
        this.Source = Source;
        this.Volume = 1;
        this.PlaybackSpeed = 1;
        this.Pitch = 1;
        this.Audio = new Audio(Source);
        this.Audio.volume = this.Volume;
        this.Audio.playbackRate = this.PlaybackSpeed * this.Pitch;
    }

    Play(Loop = false) {
        this.Audio.currentTime = 0;
        this.Audio.loop = Loop;
        this.Audio.volume = this.Volume;
        this.Audio.playbackRate = this.PlaybackSpeed * this.Pitch;
        this.Audio.play();
    }

    Stop() {
        this.Audio.pause();
        this.Audio.currentTime = 0;
    }
};
