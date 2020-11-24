const renderer = new Renderer()

$("button").on("click", function () {
    let searchString = $("input").val()
    $.get(`/recipes/${searchString}`, function (result) {
        renderer.render(result)
    })
})