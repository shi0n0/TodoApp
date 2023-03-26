package main

import (
	"fmt"
	"net/http"
)

func main() {
	http.HandleFunc("/", echoHello)
	http.ListenAndServe(":8000" , nil)
}

func echoHello(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintln(w , "<h1>Hello Todo!</h1>")
	fmt.Fprintln(w, "<h2>This Project using React&Golang,Docker,MySQL</h2>")
}