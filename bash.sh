cd config
json=$(jq '.' "default.json")

name=$(echo "$json" | jq -r '.URL')

# Print the value of the "name" property to the console

echo -e '\n=============================Performing CURL============================='
echo -e "URL: $name"
curl $name

echo -e "\n=============================Performing Wget============================="
echo -e "URL: $name"
wget $name
