globalThis.Sound = class {
    constructor(Source = "") {
        this.Source = Source;
        this.Volume = 1;
        this.Pitch = 1;
        this.Audio = new Audio(this.Source);
        this.Audio.volume = this.Volume;
        this.Audio.playbackRate = this.Pitch;
        this.Audio.addEventListener("loadeddata", () => this.Audio.playbackRate = this.Pitch);
    }

    Play() {
        this.Audio.pause();
        this.Audio.currentTime = 0;
        this.Audio.playbackRate = this.Pitch;
        this.Audio.volume = this.Volume;
        this.Audio.play();
    }

    Pause() {
        this.Audio.pause();
    }

    Stop() {
        this.Audio.pause();
        this.Audio.currentTime = 0;
    }
};