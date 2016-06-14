System.register([], function(exports_1) {
    var Video;
    return {
        setters:[],
        execute: function() {
            Video = (function () {
                function Video(id, title, videoCode, description) {
                    this.id = id;
                    this.title = title;
                    this.videoCode = videoCode;
                    this.description = description;
                }
                return Video;
            })();
            exports_1("Video", Video);
        }
    }
});
//# sourceMappingURL=video.js.map