package server

func ValidateUser(data *gin.Context) (bool, error) {
    type UserContents struct {
		IPAddress    string `json:"ipAddress"`
		Username     string `json:"username"`
		Password     string `json:"password"`
    }

    var info UserContents
    data.Bind(&info)



    return true, nil
}

func GetMapFromURL(IPAddress, Username, Password string) (map[string]interface{}, error) {
	resp, err := http.Post(IPAddress)

	if err != nil {
		fmt.Println("There was an error getting the IP Location... ", err)
		return nil, err
	}

	defer resp.Body.Close()

	// This worked because we need to convert our *Reader to []Bytes
	// https://stackoverflow.com/questions/38673673/access-http-response-as-string-in-go
	bytes, err := ioutil.ReadAll(resp.Body)
	if err != nil {
		fmt.Println("Couldn't convert RESP to []Byte for your Current Conditions Request: ", err)
	}

	var test map[string]interface{}
	err = json.Unmarshal(bytes, &test)
	if err != nil {
		return nil, err
	}

	return test, err
}
