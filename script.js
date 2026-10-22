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
        about: "全体: 入り自信持ってハキハキと<br>　　　フレーズ長いから息切れしがち(特に26小節辺り)<br>　　　<span class='imp'>たくさん聞いてたくさん歌う</span>段階<br>男子: 文末強すぎ<br><span style='color: #999'>家でもちゃんと聞いてきてほしいです…</span><br>女子: 強弱よくわからない"
    },
    {
        date: "2026/10/20",
        about: "・入りをきれいにする方法<br>今:おそるおそる入っている<br><span class='imp'>ブレスを合わせてみる、合わせる練習をする</span><br>→入りがきれいだと、<span class='imp'>そこから後も自然とタイミングが合っていく</span><br><br>・高音や低音をきれいに出す方法<br>声帯がくっついているかどうか<br>「がぎぐげご」の、<span class='imp'>gが子音の発音</span>でくっつきやすい<br>その時の声の出し方、口の形で歌う<br><br>◯切るタイミングをみんな合わせようとする<br><span class='imp'>指揮者の人を信じて、従っているのが素晴らしかった</span><br>ミスしたらかなり大きな減点になるから、これからも意識<br><br>✕歌詞を一音一音ではなく一つの文章として、<span class='imp'>普段のイントネーションを意識して</span>歌う<br>✕表情管理<br>歌の歌詞を朗読して、歌詞が伝えたいことを確認し、それを合唱につなげる<br>・<span class='imp'>第一印象(入り)</span>を大事にする<br>・表現にはルールがない<br>→<span class='imp'>クラスの「YELL」が何なのかを、クラスで話し合って統一する</span>"
    },
    {
        date: "2026/10/22",
        about: "今日の演奏を聞いてから書きます"
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
