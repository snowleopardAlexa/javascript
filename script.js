const handbag = {
    name: "Anna Karenina",
    volume: 20,
    color: "red",
    pocketNum: 3,
    strapLength: {
        left: 24,
        right: 24,
    },
    lidOpen: false,
    toggleLid: function (lidStatus) {
        this.lidOpen = lidStatus;
    },
    
}