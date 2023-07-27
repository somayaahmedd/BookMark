var siteNameInput = document.getElementById("siteName")
var siteUrlInput = document.getElementById("siteUrl")
var bookMarkList;
if (localStorage.getItem("bookmarklist") != null) {
    bookMarkList = JSON.parse(localStorage.getItem("bookmarklist"))
    displaybookmark()
}
else {
    bookMarkList = []
}
function submit() {
    var bookmark = {
        name: siteNameInput.value,
        url: siteUrlInput.value,
       
    }
    bookMarkList.push(bookmark) //[{}]
    localStorage.setItem("bookmarklist", JSON.stringify(bookMarkList))
    displaybookmark()
    clearForm()
   
}
function displaybookmark() {
    var temp = ""
    for (var i = 0; i < bookMarkList.length; i++) {
        temp += `
        <div class="webwell row" id="Google"><h2>`+bookMarkList[i].name+`</h2><a class="btn btn-primary" href=`+bookMarkList[i].url+` target="_blank" >visit</a><button class="btn btn-danger btndelete" onclick="deleteBookMark(`+ i + `)">Delete</button></div> </div>`
    }
    document.getElementById("bookmarkList").innerHTML = temp
}
function deleteBookMark(x) {
    console.log(x);
    bookMarkList.splice(x, 1)
    localStorage.setItem("bookmarklist", JSON.stringify(bookMarkList))
    displaybookmark()
}
function clearForm() {


    siteNameInput.value = ""
    siteUrlInput.value = ""
}