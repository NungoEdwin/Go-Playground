package main

import (
	"fmt"
	"net/http"

	"forum_test/handlers"
)

func main() {
	// staticfiles
	fs1 := http.FileServer(http.Dir("./static/"))
	http.Handle("/static/", http.StripPrefix("/static/", fs1))
	// Routes
	http.HandleFunc("/", handlers.HomeHandler)

	fmt.Println("server started at http://127.0.0.1:8000")
	http.ListenAndServe(":8000", nil)
}
