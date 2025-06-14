function calc() {
    let pp = 0
    pp += document.getElementById("skill").value * 10
    pp += document.getElementById("summon").value * 15
    pp += document.getElementById("rune").value * 0.1
    pp += document.getElementById("crystal").value * 3
    pp += document.getElementById("mount").value * 2
    pp += document.getElementById("star").value * 0.1
    document.getElementById("curr").value = pp
    let week = document.getElementById("week").value * 7
    pp += document.getElementById("daily1").value * week * 10
    pp += document.getElementById("daily3").value * week * 10
    pp += document.getElementById("daily2").value * (week > 7 ? 7 : week) * 15
    pp += 98 * week
    week = (week > 7 ? 7 : week)
    pp += 160 * week
    document.getElementById("pp").value = pp
}