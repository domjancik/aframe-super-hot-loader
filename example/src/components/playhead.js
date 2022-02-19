const lerp = (a, b) => (alpha) => {
    return (1 - alpha) * a + alpha * b
}

const polarToCartesian = (radius, angle) => {
    // TODO
}

AFRAME.registerComponent('playhead', {
    init: function () {
        this.originalRotation = this.el.object3D.rotation.y;

        this.audio = document.querySelector("#audio-src")
        // this.audio.play()
    },

    remove: function () {
        this.el.object3D.rotation.y = this.originalRotation;
    },

    getAudioTime: function () {
        return this.audio.currentTime
    },

    getDuration: function () {
        return this.audio.duration
    },

    tick: function () {
        this.el.object3D.rotation.y += 0.05;

        // const target = this.sampleandhold(Math.random(), randomTrigger(0.2))
        //const target = this.sampleandhold(Math.random(), this.metro(120));)
        //const val = this.param1(this.param2(target))
        const dur = this.getDuration()
        this.el.object3D.rotation.y = this.getAudioTime() / dur * Math.PI * 2
    }

});
