import 'dotenv/config'

const twitchRedirection = (request, response) => {
  const url = 'https://id.twitch.tv/oauth2/authorize'

  response.redirect(
    `${url}?client_id=${process.env.TWITCH_ID}&response_type=code&force_verify=true&scope=${process.env.TWITCH_SCOPES}&redirect_uri=${process.env.TWITCH_CALLBACK}`
    )
}

export { twitchRedirection }