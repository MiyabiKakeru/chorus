const data = [
    {
        date: "delete",
        about: ""
    },
    {
        date: "2026/10/16",
        about: "・タイミングバラバラ<br>" + "　　男子の入りが遅い<br>　　　→ます歌詞を覚える、指揮者をしっかり見る<br>　　全体的に43～56小節目がズレてる<br>　　　→ある程度音取りできたら全体の音源で練習<br>・落ち着きがない"
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