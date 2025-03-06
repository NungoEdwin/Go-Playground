package handlers

import (
	"fmt"
	"net/http"
	//"os"
	"text/template"
)

var tmpl, err = template.ParseGlob("templates/*html")

func HomeHandler(w http.ResponseWriter, r *http.Request) {
	// dir, _ := os.Getwd()
	// fmt.Fprintf(w, "Hello %v/static", dir)

	if err != nil {
		fmt.Println(err)
		return
	}
	tmpl.ExecuteTemplate(w, "home.html", nil)
	// fmt.Fprintf(w, "%v", tmpl)
}
