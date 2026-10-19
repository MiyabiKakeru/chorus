const data = [
    {
        date: "delete",
        about: ""
    },
    {
        date: "長田T",
        about: "声量(三声部のバランスがしっかり取れてることもめちゃくちゃ重要!)、音程、わたしは歌詞が聞き手にしっかり聞こえることは大事かな!<br>八木先生はあんまり歌詞のこと言わなかったけど、歌詞が聞こえるかどうかは結構大事だと思う!発音はっきりね!yellは歌詞が多いからね"
    },
    {
        date: "2026/10/16",
        about: "・タイミングバラバラ<br>" + "　　男子の入りが遅い<br>　　　→ます歌詞を覚える、指揮者をしっかり見る<br>　　全体的に43～56小節目がズレてる<br>　　　→ある程度音取りできたら全体の音源で練習<br>・落ち着きがない"
    },
    {
        date: "2026/10/19",
        about: "全体: 入り自信持ってハキハキと<br>　　　フレーズ長いから息切れしがち(特に26小節辺り)<br>　　　<span class='imp'>たくさん聞いてたくさん歌う</span>段階<br>男子: ✕ 文末強すぎ<br>女子: 強弱よくわからない"
    }
]
const container = document.getElementById("container")
const place = document.getElementById("place")
for(let key of data){
    let pushData = "<div class='item' id='" + key.date + "'>"
    pushData += "<p class='button'>" + key.date + "</p>"
    pushData += "</div>"
    container.insertAdjacentHTML("afterbegin",pushData)
    document.getElementById(key.date).addEventListener("click", () => {
        place.innerHTML = key.about
    })
}
document.getElementById("delete").addEventListener("click", () => {
    place.textContent = ""
})
