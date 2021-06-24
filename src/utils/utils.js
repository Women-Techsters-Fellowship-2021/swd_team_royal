module.exports={
    getFirst50words: (s, words=20) => {
        return s.split(/\s+/).splice(1, words).join(" ");
      },

      countWords: (s) => {
        return s.split(/\s+/).length;
      },
}