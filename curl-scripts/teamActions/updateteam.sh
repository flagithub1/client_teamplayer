curl "http://locahost:4741/createteam/${ID}" \
--include \
--request PATCH \
--header "Authorization: Token token :${TOKEN}" \
--header "Content-Type: application/json" \
--data '{
    "team": {
      "name":"'"${NAME}"'",
      "location":"'"${LOCATION}"'",
      "slogan":"'"${SLOGAN}"'"
      }
    }'
echo
