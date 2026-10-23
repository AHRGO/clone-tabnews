function status(request, response) {
    response.status(200).json({
        "teste": "Irrá, funcionou!"
    });
}

export default status;