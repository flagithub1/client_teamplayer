curl "http://locahost:4741/createteam" \
--include \
--request POST \
--header "Authorization: Token token :${TOKEN}" \
--header "Content-Type: application/json" \
--data '{
  "name": "'"${NAME}"'",
  "location":"'"${LOCATION}"'",
  "slogan":"'"${SLOGAN}"'"
 }
}'
echo
