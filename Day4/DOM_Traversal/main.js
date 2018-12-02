const log = function(place,clas,text=``){
    console.log(text,$(place).closest(`.computer`).find(clas).text())
}
$('.generator').on(`click`,function(){
    let dataid = $(this).closest(`.computer`).data(`id`)
    let idArray = []
    idArray.push(dataid)
    console.log(`Processor ID: ${$(this).closest(`.processor`)[0].id}`)
    console.log(`Computer's data-id: ${dataid}`)
    log(this,`.BUS`,`BUS:`)
})
$(`.validator`).on(`click`, function(){
    // The generator's text, The MB, Both QRs
    log(this,`.generator`)
    log(this,`.MB`)
    log(this,`.QR`)
})