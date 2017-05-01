


module.exports = {

    start: (io) => {
        io.on("connection", (socket) => {
            console.log("io started")

        })
    }

}