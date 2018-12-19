frogi = new Body()
for (let i = 0; i < 5; i++) {
    frogi.addFrog()
}
frogi.frogs.forEach(frog=>render(frog))
render()
