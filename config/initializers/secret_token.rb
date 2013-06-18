# Be sure to restart your server when you modify this file.

# Your secret key for verifying the integrity of signed cookies.
# If you change this key, all old signed cookies will become invalid!
# Make sure the secret is at least 30 characters and all random,
# no regular words or you'll be exposed to dictionary attacks.
development_token = '45b9d6adad9c35ff28b54029e44c539f2416e5745904c1903487fef13da63dc7f25eac030636a90054d8ccd1f1ee3b518bf0d4ac4c6a308d8652b0054510f8f6'
TheGothic::Application.config.secret_token = ENV['RAILS_SECRET_TOKEN'] || development_token

