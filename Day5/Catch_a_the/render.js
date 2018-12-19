let render = function (frog) {
    let source = $(`#frog-template`).html()
    let template = Handlebars.compile(source)
    let newHTML = template(frog)
    $('.mainBody').append(newHTML)
}