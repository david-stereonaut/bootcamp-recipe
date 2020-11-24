class Renderer {
    constructor() {
        this.resultsTemplate = Handlebars.compile($("#results-template").html())
    }

    render(data) {
        $("#results").empty()
        $("#results").append(this.resultsTemplate(data))
    }
}