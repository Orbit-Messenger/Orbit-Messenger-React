package main

import (
	"fmt"

	"github.com/gin-gonic/gin"
	"github.com/gin-gonic/contrib/static"
)
func main() {
	// Sets Gin to run in default mode
	router := gin.Default()

	// Serve frontend static files
	router.Static("/images", "../src/images")
	router.Use(static.Serve("/", static.LocalFile("../build", true)))

    // We'll house all of our API calls here
    api := router.Group("/api")
    {
        fmt.Println("API!", api)
		api.POST("/verifyUser", connection.ValidateUser
    }

    // This will have the frontend handle all of the routing
    router.NoRoute(func(c *gin.Context) {
        c.File("../build/index.html")
    })

	// Runs server on port 8080.
	fmt.Println("Starting server on the port 8080...")
	router.Run(":8080")
}
