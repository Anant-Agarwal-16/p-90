function add_user()
{
    player1_name=document.getElementById(player_1_name).value
    player2_name=document.getElementById(player_2_name).value
    localStorage.set("player1",player1_name)
    localStorage.set("player2",player2_name)
    window.location="game_page.html"
}